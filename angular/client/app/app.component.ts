import 'reflect-metadata';
import 'zone.js';
import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.Native,
  template: `
    <style>
      h1 {
        line-height: 1.15;
        margin: 0;
        padding: 20px 0 0 30px;
        font-size: 10pt;
        font-weight: normal;
        color: #555;
        font-family: Arial, sans-serif;
      }
    </style>

    <html>
      <h1>Stateless component</h1>
      <stateless-component opacity=0.5></stateless-component>
  
      <h1>Statefull component with hover and click events</h1>
      <statefull-component opacity=1></statefull-component>
    </html>
  `
})
export class AppComponent {
}