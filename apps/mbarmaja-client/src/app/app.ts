import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { UiLib } from '@ui';
import {TuiRoot} from '@taiga-ui/core';
import {Highlight} from '@ui';
@Component({
  imports: [RouterModule, UiLib, TuiRoot, Highlight],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'mbarmaja-client';
}
