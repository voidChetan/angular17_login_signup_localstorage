import { Component, OnInit, inject } from '@angular/core';
//import clientes from '../../assets/datos.json';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.css'
})
export class ConsultasComponent implements OnInit{
  // public listaClientes:{id:number, nombre:string, apellido:string}[] = clientes;
  http = inject(HttpClient);
  clientes:any = [];

  ngOnInit(): void {
      this.fetchClientes();
  }

  fetchClientes(){
    this.http.get('http://localhost:3001/consultas')
    .subscribe((clientes: any) =>{
      console.log(clientes);
      this.clientes = clientes;
    })
  }
}