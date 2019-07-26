import { Component, h } from '@stencil/core';
import Star from '../../static/svg/star.svg'
import StarFill from '../../static/svg/star_fill.svg'

@Component({
  tag: 'w-system-profile-card',
  styleUrl: 'systemProfileCard.scss',
  shadow: true
})
export class SystemProfileCard {

  userName: string
  //@Element() private element: HTMLElement;


  render() {
    return <div class="max-w-sm rounded overflow-hidden mt-24  m-auto mb-24">
      <img class="w-32 h-32 rounded-full mb-2  shadow-xl m-auto"  src='https://res.cloudinary.com/dtyymz4nn/image/upload/v1564066597/weddell/wimo.jpg' id='avatar' />
      
      <div class="px-6 py-4 text-center">
        <div class=" text-xl mb-2">{this.userName}</div>
        <div class="flex text-center mb-2 content-center items-center justify-center" >
          <img src={Star} class="w-4 h-4 text-red-500 mr-2 fill-current " />
          <img src={Star} class="w-4 h-4 text-red-500 mr-2" />
          <img src={Star} class="w-4 h-4 text-red-500 mr-2" />
          <img src={StarFill} class="w-4 h-4 text-red-500 mr-2" />
          <img src={StarFill} class="w-4 h-4 text-red-500 mr-2 " />
        </div>
        <p class="text-gray-700 text-base">Personal Sale Assitant </p>
      </div>
    </div>;
  }
}
