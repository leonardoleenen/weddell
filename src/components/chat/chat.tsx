import { Component, Prop, h, State, Element} from '@stencil/core';
import axios from 'axios'
import {IChatMessage} from '../../types';
import Send from '../../static/svg/send.svg';

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

  componentWillLoad() {
   
    window['element']  = this.element.shadowRoot

    axios.defaults.headers.common['Authorization'] =  `Bearer ${this.accessToken}`
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    axios.post(
      'https://dialogflow.googleapis.com/v2/projects/outtripper-register-evwgya/agent/sessions/12345:detectIntent',
      {
        "query_input": {
          "text": {
            "text": "hi",
            "language_code": "en-US"
          }
        }
      })
      .then(result  => {
        this.messages.push({
          component: result['data']['queryResult']['fulfillmentMessages'][1]['payload']['component'],
          message:result['data']['queryResult']['fulfillmentText']
        })
        this.loading = false
      })
      .catch(err => {
        this.loading = false
        console.log(err)
      })
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

  sendMessage(event) {
    this.messages.push({component: 'callOutFromUser', message: this.text})
    this.isWriting = true 
    axios.post(
      'https://dialogflow.googleapis.com/v2/projects/outtripper-register-evwgya/agent/sessions/12345:detectIntent',
      {
        "query_input": {
          "text": {
            "text": this.text,
            "language_code": "en-US"
          }
        }
      })
      .then(result  => {
        this.messages.push({
          component: result['data']['queryResult']['fulfillmentMessages'][1] ?  result['data']['queryResult']['fulfillmentMessages'][1]['payload']['component'] : 'callOutFromSystem',
          message:result['data']['queryResult']['fulfillmentText']
          
        })
        this.text=''
        this.isWriting = false
        this.loading = false
        event.focus()
        event.click()
        // this.element.scrollTop = this.element.scrollHeight;
      })
      .catch(err => {
        this.loading = false
        console.log(err)
      })
  }




  render() {
    
    if (this.loading)
      return <w-loading></w-loading>

    return <div class='p-2'> 
      <w-system-profile-card></w-system-profile-card>
      {this.messages.map(m => {
        console.log(m)
        switch(m.component) {
          case 'callOutFromSystem':
            return <w-callout-from-system message={m.message}></w-callout-from-system>
          case 'callOutFromUser':
              return <w-callout-from-user message={m.message}></w-callout-from-user>
          }
      })}

      {this.isWriting ? <w-wait-writing></w-wait-writing>: 
      <div class="flex flex-row">
        <input 
          onChange = { e => this.handleText(e)}
          value = {this.text}
          class="bg-grey-lighter text-grey-darker py-2 font-normal w-3/4 text-grey-darkest border-b border-grey-lighter rounded-l-none"/>
        <span class="flex items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold text-gray-700">
        <img src={Send} class="w-8 h-8" onClick={(e) => this.sendMessage(e)} />
      </span>
        
    </div>}
    </div>;
  }
}
