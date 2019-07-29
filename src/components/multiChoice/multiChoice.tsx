import { Component, h, Prop, State, Event, EventEmitter  } from '@stencil/core';

@Component({
  tag: 'w-multi-choice',
  styleUrl: 'multiChoice.scss',
  shadow: true
})
export class WMultiChoise {

  @Prop() values: any
  @Prop() attributeToFill: string
  @State() rawValues: any[]
  @State() selection: string[] = []

  @Event() taskCompleted: EventEmitter;

  async componentWillLoad() {
    this.rawValues = JSON.parse(await decodeURIComponent(escape(window.atob(this.values))))
  }

  complete() {
    this.taskCompleted.emit({attributeToFill:this.attributeToFill,message: this.selection.join(", "), value: this.selection})
  }

  render() {
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
    <div class='pt-4'><w-button-outlined  onClick={() => this.complete()}>Continue</w-button-outlined></div>
    
    </div>;
  }
}
