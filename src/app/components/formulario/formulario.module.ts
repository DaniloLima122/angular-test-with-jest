import { NgModule } from '@angular/core';
import { FormularioComponent } from './formulario.component';
import { UserNotationPipe } from 'src/app/shared/pipes/user-notation.pipe';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HoverDirective } from 'src/app/shared/directives/hover.directive';

@NgModule({
  declarations: [FormularioComponent,UserNotationPipe,HoverDirective],
  exports: [FormularioComponent],
  imports: [CommonModule,ReactiveFormsModule]
})
export class FormularioModule{}
