import { Component, h, Method } from '@stencil/core';

@Component({
  tag: 'w-app',
  styleUrl: 'app.scss',
  shadow: false
})
export class WApp {
  @Method()
  async JSONToRaw(toConvert) {
    return await window.btoa(unescape(encodeURIComponent(JSON.stringify(toConvert))));
  }

  @Method()
  async RawToJSON(toConvert) {
    return JSON.parse(decodeURIComponent(escape(window.atob(toConvert))))
  }
  render() {
    return <slot></slot>;
  }
}
