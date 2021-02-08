import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[hoverOpacityEffect]'
})
export class HoverDirective {

  constructor(private render : Renderer2, private element : ElementRef) { }

  @HostListener('mouseover')
  opacityOn(){
    this.render.setStyle(this.element.nativeElement, "opacity", .7)
  }

  @HostListener('mouseleave')
  opacityOff(){
    this.render.setStyle(this.element.nativeElement, "opacity", 1)
  }

}
