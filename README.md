# lit-animista-effects
Usage With Classes

import {LitElement, html} from 'lit-element';
import {Basic} from 'lit-animista-effects';
 
class MyElement extends LitElement {
  static get styles() {
    return [Basic];
  }
 
  render() {
    return html`
      <div class="shadow-drop to-center"></div>
    `;
  }
}