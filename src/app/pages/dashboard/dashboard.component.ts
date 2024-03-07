import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  clientes: any = [];

  verClientes(){
    console.log('pintarClientes');
    const localClientes = localStorage.getItem('clientes');
    this.clientes = JSON.parse(localClientes as string);
  }
}