import { Component, h } from '@stencil/core';

@Component({
  tag: 'w-wait-writing',
  styleUrl: 'waitWriting.css',
  shadow: true
})
export class WWaitWriting {
 
  render() {
    return <div class="flex  mb-4 ">
 <div class='load-wrap'>
		<div class='load-3'>
		
			<div class='line bg-gray-500'></div>
			<div class='line  bg-gray-500'></div>
			<div class='line  bg-gray-500'></div>
		</div>
	</div>
  </div>;
  }
}
