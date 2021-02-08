import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormService } from 'src/app/service/form.service';
import { toArray } from "rxjs/operators";
import { Observable, from } from 'rxjs';
import { UserData } from 'src/app/userData';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  form !: FormGroup;

  data : Observable<UserData[]> = from([]);

  constructor(private formBuilder: FormBuilder, private dataService: FormService) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      user: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })

    this.data = this.getData();
  }

  getData() {
    return this.dataService.getDados().pipe(toArray());
  }

  setData(){

    if(this.form.invalid) return false;

    this.dataService.setDados(this.form.getRawValue());
    this.data = this.getData();

    return true;

  }



}
