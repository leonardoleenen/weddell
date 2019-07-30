import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'w-number-slider',
  styleUrl: 'numberSlider.scss',
  shadow: true
})
export class WNumberSlider {

  @Prop() attributeToFill: string
  @Prop() min: number = 0
  @Prop() max: number = 100
  @Prop() label: string  

  @State() value: number = 0

  @Event() taskCompleted: EventEmitter;

  change = (e) => this.value =  e.target.value

  continue = () => this.taskCompleted.emit({attributeToFill:this.attributeToFill,value: this.value, message: `${this.value}`})

  render() {
    return <div class='container box'>
      <label class='font-thin text-sm'>{this.label} {this.value}</label>
      <input 
        type="range" 
        min={this.min} 
        max={this.max} 
        value={this.min}
        onInput={e => this.change(e)}
        class="slider"></input>
      <w-button-outlined onClick={() => this.continue()}> Continue</w-button-outlined>
    </div>;
  }
}
