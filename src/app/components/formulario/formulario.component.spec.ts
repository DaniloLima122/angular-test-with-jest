import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioComponent } from './formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { from, Observable } from 'rxjs';
import { toArray } from 'rxjs/operators';
import { UserData } from 'src/app/userData';
import { FormService } from 'src/app/service/form.service';
import { UserNotationPipe } from 'src/app/shared/pipes/user-notation.pipe';
import { Pipe, PipeTransform } from '@angular/core';

const formServiceMock = {

  getDados: jest.fn().mockReturnValue(from([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])),
  setDados: jest.fn(user => !!user)
}

@Pipe({
  name: "userNotation"
})
class mockPipe implements PipeTransform{
  transform(){}
}

describe('FormularioComponent', () => {

  let fixture: ComponentFixture<FormularioComponent>;
  let component: FormularioComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioComponent,UserNotationPipe],
      imports: [ReactiveFormsModule],
      providers: [
        {provide: FormService, useValue: formServiceMock},
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;

    component.ngOnInit();
  })


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should invalidate form if fields are not  valid", () => {

    component.form.setValue({ user: '', email: '' });

    const formIsInvalid = component.form.invalid;

    expect(formIsInvalid).toBeTruthy();
  })

  it("should invalidate form if email field are not valid", () => {

    component.form.setValue({ user: '', email: 'dgmail.com' });

    const emailInvalid = component.form.get('email')?.invalid;

    expect(emailInvalid).toBeTruthy();
  })

  it("data should be rendered", () => {

    const dados: Observable<number> = formServiceMock.getDados()

    let divContent: HTMLDivElement = fixture.nativeElement.querySelector("#dados");

    dados.pipe(toArray()).subscribe(d => {

      divContent.innerHTML = d.toString();
    })

    expect(divContent.innerHTML.length).toBeGreaterThan(0)

  })

  it('shoud add a new user', () => {


    let dados : UserData = {

      user: 'Carlos Almeida',
      email: 'carlosalmeida@gmail.com'
    }

    component.form.setValue(dados);

    let statusOnAddingNewUserSuccess = formServiceMock.setDados(component.form.getRawValue());

    expect(component.form.valid).toBeTruthy()
    expect(statusOnAddingNewUserSuccess).toBeTruthy()

  })

});
