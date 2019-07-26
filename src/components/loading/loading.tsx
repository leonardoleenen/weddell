import { Component,  h } from '@stencil/core';

@Component({
  tag: 'w-loading',
  styleUrl: 'loading.scss',
  shadow: true
})
export class Loading {
  
  render() {
    return <div> Loading Component</div>;
  }
}
