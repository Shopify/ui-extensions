declare module '*.css' {
  import {CSSResult} from 'lit-element';
  const css: CSSResult;
  export default css;
}

declare module '*.scss' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  const content: any;
  export default content;
}
