import { HoverDirective } from './hover.directive';
import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: "<button hoverOpacityEffect>Teste</button>"
})
class FormMock{}


describe('HoverDirective', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoverDirective,FormMock]
    })
  })

  it('should create an instance', () => {
    // const directive = new HoverDirective();
    // expect(directive).toBeTruthy();
  });

  it('element should receive opacity on mousehover', () => {
    const element = TestBed.createComponent(FormMock);

    let elementoWithDirective : HTMLElement = element.debugElement.query(By.directive(HoverDirective)).nativeElement;

    elementoWithDirective.dispatchEvent(new Event('mouseover'));

    expect(elementoWithDirective.style.opacity).toEqual("0.7");
  })

  it('element should return to pattern opacity on mouseleave', () => {

    const element = TestBed.createComponent(FormMock);

    let elementoWithDirective : HTMLElement = element.debugElement.query(By.directive(HoverDirective)).nativeElement;

    elementoWithDirective.dispatchEvent(new Event('mouseleave'));

    expect(elementoWithDirective.style.opacity).toEqual("1");
  })
});
