import { Component,  h, Prop } from '@stencil/core';

@Component({
  tag: 'w-callout-from-user',
  styleUrl: 'callOutFromUser.scss',
  shadow: true
})
export class WCallOutFromUser {
  
    @Prop() urlAvatar: string 
    @Prop() message: string
  
    render() {
        return <div class="flex items-center mb-4 ">
         <div class="text-sm bg-red-500 w-full p-4 mr-4 rounded-lg" >
          <p class="text-white leading-none">{this.message}</p>
          <p class="text-white">Aug 18</p>
        </div>
        <img class="w-10 h-10 rounded-full " src={this.urlAvatar}/>
       
      </div>;
      }
}
