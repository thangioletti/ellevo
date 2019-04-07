import { Component, OnInit } from '@angular/core';
import { ContatosService } from 'src/app/shared/contatos.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-contatos-cadastro',
  templateUrl: './contatos-cadastro.component.html',
  styleUrls: ['./contatos-cadastro.component.scss']
})
export class ContatosCadastroComponent implements OnInit {
  private service;
  constructor(private router: Router) {
    this.service = new ContatosService(this.router);
  }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/contatos']);
  }

}
