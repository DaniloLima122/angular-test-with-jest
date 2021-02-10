import { ComponentFixture, TestBed } from '@angular/core/testing';
import { instance, mock, when, verify, reset } from 'ts-mockito';

import { FormularioComponent } from './formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { FormService } from 'src/app/service/form.service';
import { UserNotationPipe } from 'src/app/shared/pipes/user-notation.pipe';
import { HoverDirective } from 'src/app/shared/directives/hover.directive';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FormularioComponent', () => {

  let fixture: ComponentFixture<FormularioComponent>;
  let component: FormularioComponent;

  const mockedFormService = mock(FormService);

  const userTest = { user: 'João', email: 'joao@gmail.com' };

  when(mockedFormService.getDados()).thenReturn(from([userTest]));
  when(mockedFormService.setDados(userTest)).thenReturn(!!userTest);

  // Usando uma função para configurar o ambiente dos Testes dessa suite
  const setUpTest = () => {

    TestBed.configureTestingModule({
      declarations: [FormularioComponent, HoverDirective, UserNotationPipe],
      imports: [ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  }

  // Usando a função beforeEach para configurar o ambiente dos Testes dessa suite

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [FormularioComponent, HoverDirective, UserNotationPipe],
  //     imports: [ReactiveFormsModule],
  //     providers: [
  //       {provide: FormService, useValue: formServiceMock},
  //     ]
  //   }).compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(FormularioComponent);
  //   component = fixture.componentInstance;

  //   component.ngOnInit();
  // })


  test('should create', () => {
    setUpTest();
    expect(component).toBeTruthy();
  });

  test("should invalidate form if fields are not  valid", () => {

    setUpTest();

    component.form.setValue({ user: '', email: '' });

    const formIsInvalid = component.form.invalid;

    expect(formIsInvalid).toBeTruthy();
  })

  test("should invalidate form if email field are not valid", () => {

    setUpTest();

    component.form.setValue({ user: 'Maria', email: 'dgmail.com' });

    const emailInvalid = component.form.get('email')?.invalid;

    expect(emailInvalid).toBeTruthy();
  })

  test("data should be rendered", () => {

    setUpTest();

    const dados  = instance(mockedFormService).getDados();

    let divContent: HTMLDivElement = fixture.nativeElement.querySelector("#dados");

    dados.subscribe(uuserData => {

      divContent.innerHTML = uuserData.toString();
    })

    verify(mockedFormService.getDados()).once();
    expect(divContent.innerHTML.length).toBeGreaterThan(0);

  })

  test('shoud add a new user', () => {

    setUpTest();

    let statusOnAddingNewUserSuccess = instance(mockedFormService).setDados(userTest);

    component.form.setValue(userTest);

    let formIsValid = component.form.valid;

    expect(statusOnAddingNewUserSuccess).toBeTruthy()
    expect(formIsValid).toBeTruthy();
    verify(mockedFormService.setDados(userTest)).times(1);

  })

});
