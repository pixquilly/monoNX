import { Component } from '@angular/core';
import { Button } from "../button/button";
import {TuiRoot} from '@taiga-ui/core';
@Component({
  selector: 'lib-ui',
  imports: [TuiRoot, Button],
  templateUrl: './ui.html',
  styleUrl: './ui.css',
})
export class UiLib {}
