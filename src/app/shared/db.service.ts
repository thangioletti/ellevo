import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private contatos: any;
  private usuarios: any;

  constructor() { 
    this.verifyDatabase();
  }

  private verifyDatabase() {
    this.contatos = JSON.parse(localStorage.getItem('contatos'));
    
    if (this.contatos == null) {
      this.contatos = [];
    }
  }

  private save() {
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  public addContato(newItem) {
    this.contatos.push(newItem);
    this.save();
  }

  public editContato(newItem, index) {
    this.contatos[index] = newItem;
    this.save();
  }

  public selectContato(i) {
    this.verifyDatabase();
    if (i) {
      return this.contatos[i];
    }
    
    this.contatos.sort(function(a, b){
      if (a.nome.toLowerCase() > b.nome.toLowerCase()) {
        return 1;
      }
      if (a.nome.toLowerCase() < b.nome.toLowerCase()) {
        return -1;
      }
      return 0;
    });
    
    console.log(this.contatos);
    return this.contatos;
  }

  public deleteContato(index) {
   this.contatos.splice(index, 1);
   this.save();
  }
}