import { Component, h } from '@stencil/core';

@Component({
  tag: 'w-button-outlined',
  styleUrl: 'chat-button-outlined.css',
  shadow: true
})
export class WButtonOutlined {
  render() {
    return <button class="bg-transparent font-thin self-auto mb-2 w-auto mr-2 hover:bg-red-500 text-red-700 tracking-wide  uppercase hover:text-white py-2 px-2  hover:border-transparent rounded">
      <slot/>
  </button>;
  }
}
