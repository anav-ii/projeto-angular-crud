import { Component } from '@angular/core';
import { Item } from './item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-cliente',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css'
})
export class CadastroClienteComponent {

  cliente: Item = new Item();

  clientes: Item[] = [];

  salvar() {
    this.clientes.push({ ...this.cliente });

    this.cliente = new Item();
  }

}



