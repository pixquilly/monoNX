import { Component } from '@angular/core';
import { Button } from "../button/button";
import {TuiRoot} from '@taiga-ui/core';
import { Accordion } from "../accordion/accordion";
import { Actionbar } from "../actionbar/actionbar";
@Component({
  selector: 'lib-ui',
  imports: [TuiRoot, Button, Accordion, Actionbar],
  templateUrl: './ui.html',
  styleUrls: ['./ui.scss', './ui.less'],
})
export class UiLib {}
