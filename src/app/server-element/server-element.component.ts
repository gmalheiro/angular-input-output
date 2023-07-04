import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {

  //vai vir de fora ou seja vai entrar aqui dentro 
  // Dados vão vir de fora e serão INSERIDOS NESSE COMPONENT
  // se o dado está vindo de fora ele vai entrar ou seja INPUT
  @Input() element:{type:string,name:string,content:string};

  // servidores = [{type:"server",name:"Teste",content:"Servidor para testes"},{type:"blueprint",name:"Teste2",content:"Servidor para testes2"}];

  constructor() { }

  ngOnInit(): void {  }

}
