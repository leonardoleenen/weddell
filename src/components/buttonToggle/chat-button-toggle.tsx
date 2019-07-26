import { Component, h, State, Prop } from '@stencil/core';



const classPressed = 'bg-red-500 mb-2  w-auto border border-red-500  text-white border  uppercase  mr-2  py-2 px-2 rounded font-thin'
const classUnPressed = 'mb-2  w-auto border border-red-500  text-red-500 border  uppercase  mr-2  py-2 px-2 rounded font-thin'

@Component({
  tag: 'w-toggle-button',
  styleUrl: 'chat-button-toggle.css',
  shadow: true
})
export class WButtonToggle { 

  @State() pressed: boolean = false
  @Prop() label: string 
  @Prop() identifier: string
  @Prop({mutable:true}) selectionList: string[]

  handlePressed() {
    this.pressed = !this.pressed
    if (this.pressed)
      this.selectionList.push(this.identifier)
    else {
      this.selectionList.splice(this.selectionList.indexOf(this.identifier),1)
    }   
  }

  render() {
    return <button class={this.pressed ? classPressed : classUnPressed} onClick={() => this.handlePressed()}>
   {this.label}
  </button>;
  }
}
