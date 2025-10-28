import {ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {TuiBreakpointService, TuiButton} from '@taiga-ui/core';
import {TuiActionBar} from '@taiga-ui/kit';
import {map} from 'rxjs';
import { devLog } from '@utils';
@Component({
  selector: 'lib-ui-actionbar',
  imports: [TuiActionBar, TuiButton],
  templateUrl: './actionbar.html',
  styleUrls: ['./actionbar.scss', './actionbar.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Actionbar {

  @Input({required: true}) open = false; 
  @Input() actionIcon = '@tui.trash';
  @Input() barSize: 's' | 'm' = 'm';
  @Input() btnSize: 's' | 'm' | 'l' = 'm';
  
  @Output() doAction = new EventEmitter<void>();
  @Output() closeBar = new EventEmitter<void>();
  
  protected onAction = (): void => {
    this.doAction.emit();
    devLog("doAction emitted");
  };

  @Input() onClose = (): void => {
    this.closeBar.emit();
    devLog("closeBar emitted");
  }
  
  protected readonly isMobile = toSignal(
    inject(TuiBreakpointService).pipe(map((size) => size === 'mobile')),
  );
}
