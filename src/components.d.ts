/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface WApp {
    'JSONToRaw': (toConvert: any) => Promise<string>;
    'RawToJSON': (toConvert: any) => Promise<any>;
  }
  interface WButton {
    'attributeToFill': string;
    'identifier': string;
  }
  interface WButtonOutlined {}
  interface WCalloutFromSystem {
    'message': string;
    'urlAvatar': string;
  }
  interface WCalloutFromUser {
    'message': string;
    'urlAvatar': string;
  }
  interface WChat {
    'accessToken': string;
  }
  interface WCurrencyInput {
    'attributeToFill': string;
  }
  interface WLoading {}
  interface WMultiChoice {
    'attributeToFill': string;
    'values': any;
  }
  interface WNumberSlider {
    'attributeToFill': string;
    'label': string;
    'max': number;
    'min': number;
  }
  interface WSingleChoice {
    'attributeToFill': string;
    'values': any;
  }
  interface WSystemProfileCard {}
  interface WTimeRange {
    'attributeToFill': string;
    'format': string;
  }
  interface WToggleButton {
    'identifier': string;
    'label': string;
    'selectionList': string[];
  }
  interface WWaitWriting {}
}

declare global {


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLWAppElement extends Components.WApp, HTMLStencilElement {}
  var HTMLWAppElement: {
    prototype: HTMLWAppElement;
    new (): HTMLWAppElement;
  };

  interface HTMLWButtonElement extends Components.WButton, HTMLStencilElement {}
  var HTMLWButtonElement: {
    prototype: HTMLWButtonElement;
    new (): HTMLWButtonElement;
  };

  interface HTMLWButtonOutlinedElement extends Components.WButtonOutlined, HTMLStencilElement {}
  var HTMLWButtonOutlinedElement: {
    prototype: HTMLWButtonOutlinedElement;
    new (): HTMLWButtonOutlinedElement;
  };

  interface HTMLWCalloutFromSystemElement extends Components.WCalloutFromSystem, HTMLStencilElement {}
  var HTMLWCalloutFromSystemElement: {
    prototype: HTMLWCalloutFromSystemElement;
    new (): HTMLWCalloutFromSystemElement;
  };

  interface HTMLWCalloutFromUserElement extends Components.WCalloutFromUser, HTMLStencilElement {}
  var HTMLWCalloutFromUserElement: {
    prototype: HTMLWCalloutFromUserElement;
    new (): HTMLWCalloutFromUserElement;
  };

  interface HTMLWChatElement extends Components.WChat, HTMLStencilElement {}
  var HTMLWChatElement: {
    prototype: HTMLWChatElement;
    new (): HTMLWChatElement;
  };

  interface HTMLWCurrencyInputElement extends Components.WCurrencyInput, HTMLStencilElement {}
  var HTMLWCurrencyInputElement: {
    prototype: HTMLWCurrencyInputElement;
    new (): HTMLWCurrencyInputElement;
  };

  interface HTMLWLoadingElement extends Components.WLoading, HTMLStencilElement {}
  var HTMLWLoadingElement: {
    prototype: HTMLWLoadingElement;
    new (): HTMLWLoadingElement;
  };

  interface HTMLWMultiChoiceElement extends Components.WMultiChoice, HTMLStencilElement {}
  var HTMLWMultiChoiceElement: {
    prototype: HTMLWMultiChoiceElement;
    new (): HTMLWMultiChoiceElement;
  };

  interface HTMLWNumberSliderElement extends Components.WNumberSlider, HTMLStencilElement {}
  var HTMLWNumberSliderElement: {
    prototype: HTMLWNumberSliderElement;
    new (): HTMLWNumberSliderElement;
  };

  interface HTMLWSingleChoiceElement extends Components.WSingleChoice, HTMLStencilElement {}
  var HTMLWSingleChoiceElement: {
    prototype: HTMLWSingleChoiceElement;
    new (): HTMLWSingleChoiceElement;
  };

  interface HTMLWSystemProfileCardElement extends Components.WSystemProfileCard, HTMLStencilElement {}
  var HTMLWSystemProfileCardElement: {
    prototype: HTMLWSystemProfileCardElement;
    new (): HTMLWSystemProfileCardElement;
  };

  interface HTMLWTimeRangeElement extends Components.WTimeRange, HTMLStencilElement {}
  var HTMLWTimeRangeElement: {
    prototype: HTMLWTimeRangeElement;
    new (): HTMLWTimeRangeElement;
  };

  interface HTMLWToggleButtonElement extends Components.WToggleButton, HTMLStencilElement {}
  var HTMLWToggleButtonElement: {
    prototype: HTMLWToggleButtonElement;
    new (): HTMLWToggleButtonElement;
  };

  interface HTMLWWaitWritingElement extends Components.WWaitWriting, HTMLStencilElement {}
  var HTMLWWaitWritingElement: {
    prototype: HTMLWWaitWritingElement;
    new (): HTMLWWaitWritingElement;
  };
  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement;
    'w-app': HTMLWAppElement;
    'w-button': HTMLWButtonElement;
    'w-button-outlined': HTMLWButtonOutlinedElement;
    'w-callout-from-system': HTMLWCalloutFromSystemElement;
    'w-callout-from-user': HTMLWCalloutFromUserElement;
    'w-chat': HTMLWChatElement;
    'w-currency-input': HTMLWCurrencyInputElement;
    'w-loading': HTMLWLoadingElement;
    'w-multi-choice': HTMLWMultiChoiceElement;
    'w-number-slider': HTMLWNumberSliderElement;
    'w-single-choice': HTMLWSingleChoiceElement;
    'w-system-profile-card': HTMLWSystemProfileCardElement;
    'w-time-range': HTMLWTimeRangeElement;
    'w-toggle-button': HTMLWToggleButtonElement;
    'w-wait-writing': HTMLWWaitWritingElement;
  }
}

declare namespace LocalJSX {
  interface MyComponent extends JSXBase.HTMLAttributes<HTMLMyComponentElement> {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
  interface WApp extends JSXBase.HTMLAttributes<HTMLWAppElement> {}
  interface WButton extends JSXBase.HTMLAttributes<HTMLWButtonElement> {
    'attributeToFill'?: string;
    'identifier'?: string;
    'onTaskCompleted'?: (event: CustomEvent<any>) => void;
  }
  interface WButtonOutlined extends JSXBase.HTMLAttributes<HTMLWButtonOutlinedElement> {}
  interface WCalloutFromSystem extends JSXBase.HTMLAttributes<HTMLWCalloutFromSystemElement> {
    'message'?: string;
    'urlAvatar'?: string;
  }
  interface WCalloutFromUser extends JSXBase.HTMLAttributes<HTMLWCalloutFromUserElement> {
    'message'?: string;
    'urlAvatar'?: string;
  }
  interface WChat extends JSXBase.HTMLAttributes<HTMLWChatElement> {
    'accessToken'?: string;
  }
  interface WCurrencyInput extends JSXBase.HTMLAttributes<HTMLWCurrencyInputElement> {
    'attributeToFill'?: string;
    'onTaskCompleted'?: (event: CustomEvent<any>) => void;
  }
  interface WLoading extends JSXBase.HTMLAttributes<HTMLWLoadingElement> {}
  interface WMultiChoice extends JSXBase.HTMLAttributes<HTMLWMultiChoiceElement> {
    'attributeToFill'?: string;
    'onTaskCompleted'?: (event: CustomEvent<any>) => void;
    'values'?: any;
  }
  interface WNumberSlider extends JSXBase.HTMLAttributes<HTMLWNumberSliderElement> {
    'attributeToFill'?: string;
    'label'?: string;
    'max'?: number;
    'min'?: number;
    'onTaskCompleted'?: (event: CustomEvent<any>) => void;
  }
  interface WSingleChoice extends JSXBase.HTMLAttributes<HTMLWSingleChoiceElement> {
    'attributeToFill'?: string;
    'onTaskCompleted'?: (event: CustomEvent<any>) => void;
    'values'?: any;
  }
  interface WSystemProfileCard extends JSXBase.HTMLAttributes<HTMLWSystemProfileCardElement> {}
  interface WTimeRange extends JSXBase.HTMLAttributes<HTMLWTimeRangeElement> {
    'attributeToFill'?: string;
    'format'?: string;
    'onTaskCompleted'?: (event: CustomEvent<any>) => void;
  }
  interface WToggleButton extends JSXBase.HTMLAttributes<HTMLWToggleButtonElement> {
    'identifier'?: string;
    'label'?: string;
    'selectionList'?: string[];
  }
  interface WWaitWriting extends JSXBase.HTMLAttributes<HTMLWWaitWritingElement> {}

  interface IntrinsicElements {
    'my-component': MyComponent;
    'w-app': WApp;
    'w-button': WButton;
    'w-button-outlined': WButtonOutlined;
    'w-callout-from-system': WCalloutFromSystem;
    'w-callout-from-user': WCalloutFromUser;
    'w-chat': WChat;
    'w-currency-input': WCurrencyInput;
    'w-loading': WLoading;
    'w-multi-choice': WMultiChoice;
    'w-number-slider': WNumberSlider;
    'w-single-choice': WSingleChoice;
    'w-system-profile-card': WSystemProfileCard;
    'w-time-range': WTimeRange;
    'w-toggle-button': WToggleButton;
    'w-wait-writing': WWaitWriting;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


