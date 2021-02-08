
import { AppComponent } from './app.component';
import { TestBed } from '@angular/core/testing';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent, FormularioComponent],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();

  });

  it('should create the app', () => {

    const fixture = TestBed.createComponent(AppComponent);

    const component = fixture.componentInstance;

    expect(component).toBeDefined();

  });


});
