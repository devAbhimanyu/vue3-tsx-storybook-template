import { VueElementConstructor, VNode } from "vue";

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends VueElementConstructor {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
