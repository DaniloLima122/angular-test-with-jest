import { HoverDirective } from './hover.directive';
import { TestBed, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: "<button hoverOpacityEffect [brightnessValue]='1.1'>Teste</button>"
})
class FormMock { }


describe('HoverDirective', () => {

  let element : ComponentFixture<FormMock>;
  let elementoWithDirective: DebugElement;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoverDirective, FormMock],
      providers: [
        {
          provide: ComponentFixtureAutoDetect, useValue: true
        }
      ]
    })

    element = TestBed.createComponent(FormMock);
    elementoWithDirective =  element.debugElement.query(By.directive(HoverDirective));
  })

  it('should create an instance', () => {
    // const directive = new HoverDirective();
    // expect(directive).toBeTruthy();
  });

  it('element should receive brightness config on mousehover', () => {

    elementoWithDirective.nativeElement.dispatchEvent(new Event('mouseover'));

    let buttonFilterOn = elementoWithDirective.nativeElement.style.filter;

    expect(buttonFilterOn).toEqual("brightness(1.1)");
  })

  it('element should return to pattern opacity on mouseleave', () => {

    elementoWithDirective.nativeElement.dispatchEvent(new Event('mouseleave'));

    let buttonFilterOff = elementoWithDirective.nativeElement.style.filter;

    expect(buttonFilterOff).toEqual("brightness(1)");
  })
});
