import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';
import { ITimeRange } from '../../types';
import moment from 'moment'

interface TimeRangeConfig {
  minValue: number,
  maxValue: number,
  default: number
}

@Component({
  tag: 'w-time-range',
  styleUrl: 'timeRange.scss',
  shadow: true
})
export class WTimeRange {


  /* Format can be: HH HHMM HHMMSS*/ 
  @Prop() format: string 
  @Prop() attributeToFill: string
  @State() inStartingStage: boolean = true
  @State() result: ITimeRange = {} as ITimeRange
  @Event() taskCompleted: EventEmitter;

  private config: TimeRangeConfig  = {} as TimeRangeConfig


  componentWillLoad() {
    switch(this.format.toLowerCase()) {
      case 'hh': 
        this.config.minValue = 0
        this.config.maxValue = 24 
        this.config.default = 12 
        break
      case 'hh:mm':
        this.config.minValue = 0
        this.config.maxValue = 1440 
        this.config.default = 720 
        break
      default:
        throw ('Invalid format time. Must be: hh or hh:mm')
    }

    this.result = {
      ...this.result,
      starting: this.config.default,
    }
  }

  change(e) {
    if (this.inStartingStage)
      this.result = {
        ...this.result,
        starting: e.target.value
      }
    else
      this.result = {
        ...this.result,
        till: e.target.value
      }

  }

  continue() {
    if (this.inStartingStage){
      this.inStartingStage = false
      this.result.till = this.result.starting
      return
    }

    const starting = `${moment.utc().startOf('day').add(this.result.starting, this.format === 'hh' ?  'hours' : 'minutes').format('hh:mmA')}`
    const till = `${moment.utc().startOf('day').add(this.result.till, this.format === 'hh' ?  'hours' : 'minutes').format('hh:mmA')}`

    this.taskCompleted.emit({attributeToFill:this.attributeToFill,value: this.result, message: `starting at ${starting} to ${till}`})
  }

  render() {
    const value = moment.utc().startOf('day').add(this.inStartingStage ? this.result.starting : this.result.till, this.format === 'hh' ?  'hours' : 'minutes').format('hh:mm A')

    const label = this.inStartingStage ? `Starting at ${value}` : `till at ${value}`
    return <div class='container box'>
      <label class='font-thin text-sm'>{label}</label>
      <input 
        type="range" 
        min={this.config.minValue} 
        max={this.config.maxValue} 
        value={this.config.default}
        onInput={e => this.change(e)}
        class="slider"></input>
      <w-button-outlined onClick={() => this.continue()}> Continue</w-button-outlined>
    </div>;
  }
}
