import { Component, OnInit } from '@angular/core';
import { ContatosService } from 'src/app/shared/contatos.service';
import { Router } from '@angular/router'
import swal  from 'sweetalert';


@Component({
  selector: 'app-contatos-list',
  templateUrl: './contatos-list.component.html',
  styleUrls: ['./contatos-list.component.scss']
})

export class ContatosListComponent implements OnInit {

  constructor(private service: ContatosService, private router: Router) { 
    
  }
 
  dataSource = []; 
  displayedColumns: string[] = ['nome', 'telefone', 'email', 'acao'];

  ngOnInit() {
    this.displayMsg();
    this.dataSource = []; 
    let contatos = this.service.select();
    let index;

    for (index in contatos) {
      let contato = contatos[index];
      contato.id = index;
      this.dataSource.push(contato);
    }
  }

  delalhe(nome, telefone, email) {
    swal(`
      Nome: ${nome}
      Telefone: ${telefone}
      E-mail: ${email}
    `);
  }

  edit(i) {
    localStorage.setItem('toEdit', i);
    this.router.navigate(['/contatos/cadastro']);
  }

  delete(i) {
  
    swal({
      title: "Você tem certeza?",
      icon: "warning"
    })
    .then((willDelete) => {
      if (willDelete) {
        this.service.delete(i);
        this.ngOnInit();
      } 
    });
  }

   //Método que controla mensagens.
   displayMsg() {
    let msg = localStorage.getItem('msg');
    if (msg) {
      setTimeout(function () {
        swal(msg, '', 'success');
      }, 100);
      localStorage.removeItem('msg');
    }
  }
}
;