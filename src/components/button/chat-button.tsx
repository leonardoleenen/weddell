import { Component, h } from '@stencil/core';

@Component({
  tag: 'w-button',
  styleUrl: 'chat-button.css',
  shadow: true
})
export class WButton{
  render() {
    return <button class="bg-transparent text-center text-red ">
   Continuar
  </button>;
  }
}
