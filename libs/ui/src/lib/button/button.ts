import { Component, Input } from '@angular/core';
import { TuiButton, TuiAppearance, TuiSizeS, TuiSizeL, TuiSizeM } from '@taiga-ui/core';

@Component({
  selector: 'lib-ui-button',
  imports: [TuiButton],
  templateUrl: './button.html',
  styleUrls: ['button.less'],
})
export class Button {
  @Input() disabled = false;
  @Input() text = ""; //placeholder that evaluates to false to use <ng-content>
  @Input() size: TuiSizeS | TuiSizeM | TuiSizeL = 'm';
  @Input() appearance = 'primary'; 
}
