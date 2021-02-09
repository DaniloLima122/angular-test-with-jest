import { NgModule } from '@angular/core';
import { FormularioComponent } from './formulario.component';
import { UserNotationPipe } from 'src/app/shared/pipes/user-notation.pipe';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HoverDirective } from 'src/app/shared/directives/hover.directive';
import { MessageFormComponent } from '../message-form/message-form.component';

@NgModule({
  declarations: [FormularioComponent,UserNotationPipe,HoverDirective,MessageFormComponent],
  exports: [FormularioComponent],
  imports: [CommonModule,ReactiveFormsModule]
})
export class FormularioModule{}
