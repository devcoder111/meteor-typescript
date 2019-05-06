import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'block-component',
  encapsulation: ViewEncapsulation.Native,
  template: `
    <style>
        html {
            background-color: white;
            padding: 5px 20px 10px 20px;
            margin: 15px 15px;
            box-shadow: 0px 1px 5px grey;
        }

        h2 {
            font-family:  Arial, sans-serif;
            line-height: 1.15;
            margin: 0;
            font-size: 11pt;
            font-weight: bold;
            padding: 10px 0 5px 0;
        }

        p {
            font-family:  Arial, sans-serif;
            line-height: 1.15;
            margin: 0;
            font-size: 9pt;
            padding: 0 0 10px 0;
        }
    </style>

    <html>
      <ng-content></ng-content>
    </html>
  `
})
export class BlockComponent {


}