import { Component } from '@angular/core';
import { Button } from "../button/button";
import {TuiRoot} from '@taiga-ui/core';
import { Accordion } from "../accordion/accordion";
@Component({
  selector: 'lib-ui',
  imports: [TuiRoot, Button, Accordion],
  templateUrl: './ui.html',
  styleUrls: ['./ui.scss', './ui.less'],
})
export class UiLib {}
