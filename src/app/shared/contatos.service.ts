import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router'
import {DbService} from './db.service'

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  submitted = false;
  edit: any;
  db: DbService;
  data = {
    nome: '',
    telefone: '',
    email: '',
    login: '',
    senha: '',
  };
  form: FormGroup;

  constructor(private router: Router) {
    this.db = new DbService();
    this.edit = localStorage.getItem('toEdit');

    localStorage.removeItem('toEdit');
    if (this.edit) {
      this.data = this.db.selectContato(this.edit);
    }

    this.form = new FormGroup({
      nome: new FormControl(this.data.nome, Validators.required),
      telefone: new FormControl(this.data.telefone, Validators.required),
      email: new FormControl(this.data.email, Validators.required),
      login: new FormControl(this.data.login),
      senha: new FormControl(this.data.senha),
    });
  
  }
  
 
  save(event) {
    this.submitted = true;
    
    if (this.form.valid) {
      let newItem = this.form.value;
    
      if (this.edit){
        this.db.editContato(newItem,this.edit);
      } else {
        this.db.addContato(newItem);
      }

      //Mensagem de sucesso
      if (this.edit){
        localStorage.setItem('msg', 'Contato editado com sucesso!');
      } else {
        localStorage.setItem('msg', 'Contato incluido com sucesso!');
      }

      this.router.navigate(['/contatos']);

    }
  }

  select() {
    return this.db.selectContato();
  }

  delete(i) {
    this.db.deleteContato(i);
    localStorage.setItem('msg', 'Contato excluido com sucesso!');
  }
}
