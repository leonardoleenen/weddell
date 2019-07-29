import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';



@Component({
  tag: 'w-button',
  styleUrl: 'chat-button.css',
  shadow: true
})
export class WButton{

  @Prop() identifier: string = ''
  @Prop() attributeToFill: string = ''
  @Event() taskCompleted: EventEmitter;

  complete() {
    this.taskCompleted.emit(
      {
        attributeToFill:this.attributeToFill,
        message: this.identifier,
        value: this.identifier
      }
    )
  }

  render() {
    return <button  
      onClick={() => this.complete()}
      class="mb-2  w-auto border border-red-500  text-red-500 border  uppercase  mr-2  py-2 px-2 rounded font-thin">
      <slot/>
  </button>;
  }
}
