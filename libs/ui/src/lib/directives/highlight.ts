import { Directive, HostListener, inject, Input } from '@angular/core';
import { ElementRef } from '@angular/core';
@Directive({
  selector: '[libHighlight]',
})
export class Highlight {

  private elmRef!: ElementRef;
  @Input() highlightColor = 'yellow';

  constructor() {
    this.elmRef = inject(ElementRef);
    // this.elmRef.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.elmRef.nativeElement.style.backgroundColor = color;
  }
}
