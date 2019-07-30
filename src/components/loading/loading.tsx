import { Component, h } from '@stencil/core';

@Component({
  tag: 'w-loading',
  styleUrl: 'loading.scss',
  shadow: true
})
export class Loading {

  render() {
    return <div class= 'container'> <div class="preloader-1 object-none" style={{ position: 'absolute', left: '70%', top: '35%', marginLeft: '-100px' }}>
      <div>Loading</div>
      <span class="line line-1"></span>
      <span class="line line-2"></span>
      <span class="line line-3"></span>
      <span class="line line-4"></span>
      <span class="line line-5"></span>
      <span class="line line-6"></span>
      <span class="line line-7"></span>
      <span class="line line-8"></span>
      <span class="line line-9"></span>
    </div></div>;
  }
}
