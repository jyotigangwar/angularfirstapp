import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') color: any
  constructor(private element: ElementRef) {
    console.log("mil gya appHighlight", this.element.nativeElement, this.color)
  }

  ngOninit() {
    this.element.nativeElement.style.color = this.color
  }

}
