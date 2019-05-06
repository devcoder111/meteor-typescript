import {Component, HostListener, ViewEncapsulation} from '@angular/core';
import {Block} from "../../react/client/app/block.component";

@Component({
  inputs: ['opacity'],
  selector: 'statefull-component',
  encapsulation: ViewEncapsulation.Native,
  template: `
    <html [ngStyle]="{
        'opacity': opacity,
        'cursor': 'pointer'
      }">

      <block-component (click)="onClick()">
          
        <h2>Properties</h2>
        <p>Opacity: {{opacity}}</p>
          
        <h2>State</h2>
        <p>Hovered: {{hovered}}</p>
        <p>Clicked: {{clicked}}</p>
          
      </block-component>
    </html>
  `
})

export class StatefullComponent {
  hovered = false;
  clicked = 0;
  opacity = 0.8;

  onClick() {
    this.clicked++;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.hovered = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.hovered = false;
  }
}
