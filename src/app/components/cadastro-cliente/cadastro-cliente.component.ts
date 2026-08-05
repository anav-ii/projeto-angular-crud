import { Component, OnInit } from '@angular/core';
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
export class CadastroClienteComponent implements OnInit{

  cliente: Item = new Item();

  clientes: Item[] = [];

  pesquisa: string = '';

  clientesFiltrados: Item [] = []

  indiceEdicao: number = -1;
  

  salvar() {

    if (history.state.cliente) {
      // Aqui você fará a atualização no banco ou no serviço.
      // Como está usando apenas arrays locais, essa alteração
      // não será refletida na lista automaticamente.
      return;
    }
  
    let item = new Item();
  
    item.nome = this.cliente.nome;
    item.email = this.cliente.email;
    item.cpf = this.cliente.cpf;
    item.datadenascimento = this.cliente.datadenascimento;
    item.uf = this.cliente.uf;
    item.municipio = this.cliente.municipio;
  
    this.clientes.push(item);
  
    this.clientesFiltrados = this.clientes;
  
    this.cliente = new Item();
  }

  deletar(indice: number){
    this.clientes.splice(indice, 1)
  }

  pesquisar () {

    this.clientesFiltrados = []

    for (let item of this.clientes) {
      if (item.nome.toLowerCase() == this.pesquisa.toLowerCase()) {
        this.clientesFiltrados.push(item);
      }
    }
  }

  editar(item: Item, indice: number){
      this.cliente.nome = item.nome;
      this.cliente.email = item.email;
      this.cliente.cpf = item.cpf;
      this.cliente.datadenascimento = item.datadenascimento;
      this.cliente.uf = item.uf;
      this.cliente.municipio = item.municipio;
    
      this.indiceEdicao = indice;
    }

    atualizar() {

      this.clientes[this.indiceEdicao].nome = this.cliente.nome;
      this.clientes[this.indiceEdicao].email = this.cliente.email;
      this.clientes[this.indiceEdicao].cpf = this.cliente.cpf;
      this.clientes[this.indiceEdicao].datadenascimento = this.cliente.datadenascimento;
      this.clientes[this.indiceEdicao].uf = this.cliente.uf;
      this.clientes[this.indiceEdicao].municipio = this.cliente.municipio;
    
      this.cliente = new Item();
      this.indiceEdicao = -1;
    }

    ngOnInit(): void {
      console.log(history.state);
    
      const cliente = history.state.cliente;
    
      if (cliente) {
        this.cliente = { ...cliente };
        this.indiceEdicao = 0;
      }
    }
    
  }



