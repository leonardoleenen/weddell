import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'w-multi-choice',
  styleUrl: 'multiChoice.scss',
  shadow: true
})
export class WMultiChoise {

  @Prop() values: any
  @State() rawValues: any[]
  @State() selection: string[] = []

  async componentWillLoad() {
    this.rawValues = JSON.parse(await decodeURIComponent(escape(window.atob(this.values))))
  }

  fake() {
    console.log(this.selection)
  }

  render() {
    console.log(this.selection)
    return <div class='block'> {
      this.rawValues.map(v => {
        return (<w-toggle-button 
            identifier={v.identifier} 
            label={v.description} 
            selectionList= {this.selection}
            key={v.identifier}></w-toggle-button>)
      })
    }
    <span></span>
    <div class='pt-4'><w-button-outlined  onClick={() => this.fake()}>Continue</w-button-outlined></div>
    
    </div>;
  }
}
