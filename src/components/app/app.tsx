import { Component, h, Method, Prop } from '@stencil/core';
//import { configureStore } from "../../redux/store/index";
import { Store } from "@stencil/redux";

@Component({
  tag: 'w-app',
  styleUrl: 'app.scss',
  shadow: false
})
export class WApp {
  @Prop({ context: "store", mutable:true }) store: Store<any,any>;

  @Method()
  async JSONToRaw(toConvert) {
    return await window.btoa(unescape(encodeURIComponent(JSON.stringify(toConvert))));
  }

  @Method()
  async RawToJSON(toConvert) {
    return JSON.parse(decodeURIComponent(escape(window.atob(toConvert))))
  }

  

  async componentWillLoad() {
    //debugger
    // this.store = configureStore({})
    // this.store.setStore(configureStore({}));
  }

  render() {
    return <slot></slot>;
  }
}
