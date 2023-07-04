import { Component } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {
  servidores = [{type:"server",name:"Teste",content:"Servidor para testes"},{type:"blueprint",name:"Teste2",content:"Servidor para testes2"}];
}
