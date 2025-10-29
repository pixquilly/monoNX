import { Component } from '@angular/core';
import { Button } from "../button/button";
import {TuiRoot} from '@taiga-ui/core';
import { Accordion } from "../accordion/accordion";
import { Actionbar } from "../actionbar/actionbar";
import { Table } from "../table/table";
@Component({
  selector: 'lib-ui',
  imports: [TuiRoot, Button, Accordion, Actionbar, Table],
  templateUrl: './ui.html',
  styleUrls: ['./ui.scss', './ui.less'],
})
export class UiLib {
  open = true;
  doAction(): void{
    console.log("Action performed");
  }
  toggleBar(): void{
    this.open = !this.open;
  }
}
