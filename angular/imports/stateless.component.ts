import {Component, ViewEncapsulation} from '@angular/core';
import {Block} from "../../react/client/app/block.component";

@Component({
  inputs: ['opacity'],
  selector: 'stateless-component',
  encapsulation: ViewEncapsulation.Native,
  template: `    
    <html [ngStyle]="{
        'opacity': opacity
      }">
    
      <block-component>
          
        <h2>Properties</h2>
        <p>Opacity: {{opacity}}</p>
          
      </block-component>
    </html>
  `
})
export class StatelessComponent {
  opacity = 0.5;
}