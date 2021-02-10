import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormularioModule } from './components/formulario/formulario.module';
import { FormService } from './service/form.service';



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
