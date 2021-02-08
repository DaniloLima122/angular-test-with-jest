import { Directive, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[hoverOpacityEffect]'
})
export class HoverDirective {

  @HostBinding('style.filter') brightness : string = '';

  @Input() brightnessValue = 1

  @HostListener('mouseover')
  opacityOn(){
    this.brightness = `brightness(${this.brightnessValue})`
  }

  @HostListener('mouseleave')
  opacityOff(){
    this.brightness = `brightness(1)`
  }

}
