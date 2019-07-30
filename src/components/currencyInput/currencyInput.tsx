import { Component, h, Prop, Event, EventEmitter, State } from '@stencil/core';
import Send from '../../static/svg/send.svg';

@Component({
  tag: 'w-currency-input',
  styleUrl: 'currencyInput.scss',
  shadow: true
})
export class WCurrencyInput {

  @Prop() attributeToFill: string = ''
  @Event() taskCompleted: EventEmitter;
  @State() value: number = 0 

  complete() {
    this.taskCompleted.emit({attributeToFill:this.attributeToFill,message:  this.value, value: this.value})
  }
 
  handleChange = (e) => {
    this.value = e.target.value
  }

  render() {
    return <div class='container bg-gray-300 rounded'>
      <label class='font-display rounded-l bg-red-500 w-auto p-2 pl-4 text-white font-thin tracking-wider'>USD</label>
      <input 
        onChange={e => this.handleChange(e)}
        value = {this.value.toLocaleString()}
        type="tel" class= 'bg-gray-300 font-thin text-gray-900 tracking-wider pl-2 outline-none'
        ></input>
      <img src={Send} class='w-6 h-6' onClick={() => this.complete()}/>
  </div>;
  }
}
