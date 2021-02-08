import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormService } from './service/form.service';
import { HoverDirective } from './shared/directives/hover.directive';
import { FormularioModule } from './components/formulario/formulario.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormularioModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
