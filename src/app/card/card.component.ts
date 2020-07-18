import { ContatoService } from './../contato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

contatos: Array<any>;

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.contatoService.listar().subscribe(dados => this.contatos = dados)
  }
}
