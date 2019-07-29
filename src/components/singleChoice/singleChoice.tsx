import { Component, h, Prop, State, Event, EventEmitter  } from '@stencil/core';

@Component({
  tag: 'w-single-choice',
  styleUrl: 'singleChoice.scss',
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
        return (<w-button 
            identifier={v.identifier} 
            key={v.identifier}>{v.description}</w-button>)
      })
    } 
    </div>;
  }
}
