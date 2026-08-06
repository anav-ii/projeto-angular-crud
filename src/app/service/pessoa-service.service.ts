// Importa o decorator Injectable do Angular
import { Injectable } from '@angular/core';

// Importa a classe Item que representa um cliente
import { Item } from '../components/cadastro-cliente/item';

// Define este serviço como injetável em toda a aplicação
@Injectable({
  // O serviço será criado como uma única instância (singleton)
  // e ficará disponível em toda a aplicação
  providedIn: 'root'
})
export class PessoaServiceService {

  // Lista privada que armazena os clientes
  private clientes: Item[] = [];

  // Método responsável por adicionar um novo cliente
  adicionar(cliente: Item): void {

    // Adiciona o cliente ao array
    this.clientes.push(cliente);

    // Salva a lista atualizada no Local Storage
    localStorage.setItem('pessoasStorage', JSON.stringify(this.clientes));

  }

  // Método que retorna todos os clientes cadastrados
  listar(): Item[] {

    // Recupera os dados salvos no Local Storage
    const dados = localStorage.getItem('pessoasStorage');

    // Verifica se existem dados armazenados
    if (dados) {

      // Converte a string JSON em um array de objetos
      this.clientes = JSON.parse(dados);

    }

    // Retorna a lista de clientes
    return this.clientes;

  }

  // Método responsável por atualizar um cliente existente
  atualizar(indice: number, cliente: Item): void {

    // Substitui o cliente da posição informada
    this.clientes[indice] = cliente;

    // Salva novamente a lista atualizada no Local Storage
    localStorage.setItem('pessoasStorage', JSON.stringify(this.clientes));

  }

  // Método responsável por excluir um cliente
  excluir(indice: number): void {

    // Remove um cliente da posição informada
    this.clientes.splice(indice, 1);

    // Atualiza os dados armazenados no Local Storage
    localStorage.setItem('pessoasStorage', JSON.stringify(this.clientes));

  }

}