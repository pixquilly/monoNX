import { Component } from '@angular/core';
import {TuiButton} from '@taiga-ui/core';

@Component({
  selector: 'lib-ui-button',
  imports: [TuiButton],
  templateUrl: './button.html',
  styleUrls: ['./button.scss', './button.less'],
})
export class Button {}
