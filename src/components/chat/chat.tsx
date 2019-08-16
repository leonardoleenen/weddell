import { Component, Prop, h, State, Element, Listen} from '@stencil/core';
import axios from 'axios'
import {IChatMessage} from '../../types';
import Send from '../../static/svg/send.svg';
import {sendMessage} from '../../services/index'

@Component({
  tag: 'w-chat',
  styleUrl: 'chat.scss',
  shadow: true
})
export class Chat {

  @Element() private element: HTMLElement;


  @Prop() accessToken: string
  @State() loading: boolean = true
  @State() messages: IChatMessage[] = []
  @State() isWriting: boolean = false 
  @State() text: string = ''
  @State() commandToRender: string = ''
  result: any = {}
  systemAvatar = 'https://res.cloudinary.com/dtyymz4nn/image/upload/v1564066597/weddell/wimo.jpg'

  componentWillLoad() {
   
    axios.defaults.headers.common['Authorization'] =  `Bearer ${this.accessToken}`
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    sendMessage('hi',this.accessToken)
      .then(result  => {
        this.messages.push({
          component: result['data']['queryResult']['fulfillmentMessages'][1] ?  result['data']['queryResult']['fulfillmentMessages'][1]['payload']['component'] : 'callOutFromSystem',
          command: result['data']['queryResult']['fulfillmentMessages'][1] ?  result['data']['queryResult']['fulfillmentMessages'][1]['payload']['command'] : '',
          values: result['data']['queryResult']['fulfillmentMessages'][1] ?  result['data']['queryResult']['fulfillmentMessages'][1]['payload']['values'] : '',
          params: result['data']['queryResult']['fulfillmentMessages'][1] ?  result['data']['queryResult']['fulfillmentMessages'][1]['payload']['params'] : '',
          attributeToFill: result['data']['queryResult']['fulfillmentMessages'][1] ?  result['data']['queryResult']['fulfillmentMessages'][1]['payload']['attributeToFill'] : '',
          message:result['data']['queryResult']['fulfillmentText']
        })
        this.loading = false
      })
      .catch(err => {
        this.loading = false
        console.log(err)
      })
  }

  @Listen('taskCompleted')
  handleTask(value){
    this.setResult(value.detail.value)
    this.sendMessage(value.detail.message)
  }

  setResult(value) {
    const reversedList = Object.assign([],this.messages)
    reversedList.reverse()
    const toInsert = {} 
    toInsert[reversedList[0]['attributeToFill']] = value
    this.result = {
      ...this.result,
      ...toInsert
    }
  }


  componentDidUpdate() {
    if (this.element.shadowRoot.querySelector('input')){
      this.element.shadowRoot.querySelector('input').focus()
      this.element.shadowRoot.querySelector('input').click()
    }
  }

  handleText(e) {
    this.text = e.target.value
  }


  sendMessage(msg?:string) {
    this.messages.push({component: 'callOutFromUser', message: msg ? msg : this.text})
    
    this.isWriting = true 
    sendMessage(msg ? msg : this.text,this.accessToken)
      .then(result  => {
        this.messages.push({
          component: result['data']['queryResult']['fulfillmentMessages'][1] ?  result['data']['queryResult']['fulfillmentMessages'][1]['payload']['component'] : 'callOutFromSystem',
          command: result['data']['queryResult']['fulfillmentMessages'][1] ?  result['data']['queryResult']['fulfillmentMessages'][1]['payload']['command'] : '',
          values: result['data']['queryResult']['fulfillmentMessages'][1] ?  result['data']['queryResult']['fulfillmentMessages'][1]['payload']['values'] : '',
          params: result['data']['queryResult']['fulfillmentMessages'][1] ?  result['data']['queryResult']['fulfillmentMessages'][1]['payload']['params'] : '',
          attributeToFill: result['data']['queryResult']['fulfillmentMessages'][1] ?  result['data']['queryResult']['fulfillmentMessages'][1]['payload']['attributeToFill'] : '',
          message:result['data']['queryResult']['fulfillmentText']
        })
        this.setResult(this.text)
        this.text=''
        this.isWriting = false
        this.loading = false
       
      })
      .catch(err => {
        this.loading = false
        console.log(err)
      })
  }

  renderCommand() {
    const reversedList = Object.assign([],this.messages)
    reversedList.reverse()
    const attributeToFill = (reversedList)[0]['attributeToFill']
    const params = (reversedList)[0]['params']
    switch( this.messages.length >0 ?  (reversedList)[0]['command'] : undefined){
      case 'currencyInput':
        return <w-currency-input attributeToFill={attributeToFill} {...params} ></w-currency-input>
      case 'numberSlider':
        return <w-number-slider attributeToFill={attributeToFill} {...params} ></w-number-slider>
      case 'timeRange':
        return <w-time-range attributeToFill={(reversedList)[0]['attributeToFill']} {...(reversedList)[0]['params']} ></w-time-range>
      case 'singleChoice':
          return <w-single-choice attributeToFill={(reversedList)[0]['attributeToFill']} values={(reversedList)[0]['values']} ></w-single-choice>
      case 'multipleChoice':
        return <w-multi-choice attributeToFill={(reversedList)[0]['attributeToFill']} values={(reversedList)[0]['values']} ></w-multi-choice>
      default:
        return (
          <div class='box bg-gray-300 rounded p-2'>
            <input 
              onChange= { e => this.handleText(e)}
              value =  {this.text}
            class= 'bg-gray-300 font-thin text-gray-900 pl-2 outline-none'></input>
            <img src={Send} class='w-6 h-6' onClick={() => this.sendMessage()}/>
        </div>)
    }
  }



  render() {
    console.log(this.messages)
    if (this.loading)
      return <w-loading></w-loading>

    return <div class='p-2'> 
      <w-system-profile-card></w-system-profile-card>
      {this.messages.map(m => {
        switch(m.component) {
          case 'callOutFromUser':
              return <w-callout-from-user message={m.message}></w-callout-from-user>
          default:
              return <w-callout-from-system message={m.message} urlAvatar={this.systemAvatar}></w-callout-from-system>
          }
      })}

      
      {this.isWriting ? <w-wait-writing></w-wait-writing>: this.renderCommand()}
    </div>;
  }
}
