import {KeyValuePipe, NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TuiAccordion} from '@taiga-ui/experimental';

@Component({
  selector: 'lib-ui-accordion',
  imports: [TuiAccordion, KeyValuePipe],
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Accordion {
  
  @Input() data: Record<string, string> = {
    'Project Status Update': 
      'The backend Express API setup is complete, and the database seeding is ready. We are currently integrating the Angular Task List component.',

    'Next Steps for UI Library': 
      'We need to define a theme switcher using Taiga UI tokens and finalize the style encapsulation settings across all components.',

    'Why use NX Monorepo?': 
      'NX provides better code sharing, consistent tooling (like generators), and a robust project graph for dependency analysis, improving build times.',
  };
}
 