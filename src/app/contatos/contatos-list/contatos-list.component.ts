import { Component, OnInit } from '@angular/core';
import { ContatosService } from 'src/app/shared/contatos.service';
import { Router } from '@angular/router'
import Swal from 'sweetalert2'

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
    Swal.fire({
      title: '<strong>Detalhe</strong>',
      type: 'info',
      html:
        '<b>Nome</b>: '+nome+
        '<br><b>Telefone</b>: '+telefone+
        '<br><b>E-mail</b>: '+email,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Fechar',    
    })
  }

  edit(i) {
    localStorage.setItem('toEdit', i);
    this.router.navigate(['/contatos/cadastro']);
  }

  delete(i) {
    
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Você tem certeza?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
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
        Swal.fire({
          type: 'success',
          title: msg,
        });
      }, 100);
      localStorage.removeItem('msg');
    }
  }
}
;