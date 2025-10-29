import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';

import {TuiTable} from '@taiga-ui/addon-table';

import {TuiFormatNumberPipe} from '@taiga-ui/core';
@Component({
  selector: 'lib-ui-table',
  imports: [AsyncPipe, TuiFormatNumberPipe, TuiTable],
  templateUrl: './table.html',
  styleUrls: ['./table.scss', './table.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Table {
  protected readonly data = [
      {
        name: 'Alex Inkin',
        balance: 1323525,
      },
      {
        name: 'Roman Sedov',
        balance: 423242,
      },
  ] as const;

  protected readonly columns = Object.keys(this.data[0]);
}
