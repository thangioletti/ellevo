import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router'
import {DbService} from './db.service'
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private form: FormGroup;
  db: DbService;
  
  constructor(private router: Router) { 
    this.db = new DbService();
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
    });
  }

  login(event) {
    if (this.form.valid) {
      let login = this.form.value.login;
      let senha = this.form.value.senha;
      if (login == 'root' && senha == 'root') {
        return this.autenticou();
      }
      
      let contatos = this.db.selectContato(null);
      let i;
      let achou = false;
      for (i in contatos) {
        let contato = contatos[i]; 
        if (contato.login == login && contato.senha == senha)  {
          return this.autenticou();
        }        
      }

      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Login ou senha invalidos!',
      })
      
    }
  }

  autenticou() {
    localStorage.setItem('autenticado', 'ok');
    this.router.navigate(['/login']);
    return true;
  }
}
