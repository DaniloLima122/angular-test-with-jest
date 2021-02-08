import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { UserData } from '../userData';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  dados: UserData[] = [{
    user: "Danilo",
    email: "dan@gmail.com"
  }];

  constructor() { }

  getDados() {

    return from(this.dados)
  }

  setDados(user: UserData) {

    if (!user) return false;

    this.dados = [...this.dados, user];

    return true;
  }
}
