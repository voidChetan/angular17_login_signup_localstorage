import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.css'
})
export class ConsultasComponent{
  clientes: any = [
    {"nombre": "AAAAAAAAAAAAAA", "apellido": "perez"},
    {"nombre": "Maria", "apellido": "merlo"},
    {"nombre": "Carlos", "apellido": "perez"},
    {"nombre": "Ana", "apellido": "sanchez"},
    {"nombre": "Pedro", "apellido": "gomez"},
]

  loggedUser: any;
  constructor(private router: Router) {
    const localUser = localStorage.getItem('loggedUser');
    if(localUser != null) {
      this.loggedUser = JSON.parse(localUser);
    }
  }

  pintar(){
    console.log(this.clientes);
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
  }
}