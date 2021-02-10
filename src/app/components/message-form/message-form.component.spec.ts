import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MessageFormComponent } from './message-form.component';


const formIsFilled = {
   fieldsFilled: jest.fn().mockReturnValue(false),
   emailValid: jest.fn().mockReturnValue(false),
};

describe('MessageFormComponent', () => {
  let component: MessageFormComponent;
  let fixture: ComponentFixture<MessageFormComponent>;
  let spanElement : HTMLSpanElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageFormComponent ],

    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageFormComponent);
    component = fixture.componentInstance;
    spanElement = fixture.debugElement.query(By.css('span')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display error message when form fields is blank', () => {

    if(!formIsFilled.fieldsFilled())  component.message = "Campo obrigatório";

    fixture.detectChanges();

    expect(spanElement.textContent).toEqual(component.message);

  })

  it('should display a message if email is invalid', () => {

    if(!formIsFilled.emailValid())  component.message = "Email Inválido";

    fixture.detectChanges();

    expect(spanElement.textContent).toEqual(component.message);

  })

});
