
import { AppComponent } from './app.component';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  template: ''
})
class FormularioMock{}

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent, FormularioMock],
      imports: [ReactiveFormsModule],
    })
    .compileComponents();

  });

  it('should create the app', () => {

    const fixture = TestBed.createComponent(AppComponent);

    const component = fixture.componentInstance;

    expect(component).toBeDefined();

  });


});
