import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styleUrls: ['./peticiones.component.css']
})
export class PeticionesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  enviarDatos(datosFormulario: any){
    this.http.post('http://localhost:3001/formulario', datosFormulario)
    .subscribe((respuesta: any) =>{
      console.log(respuesta);
    })
  }
}
