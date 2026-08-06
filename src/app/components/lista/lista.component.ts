// Importa os recursos necessários do Angular
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// Importa o modelo da classe Item (Cliente)
import { Item } from '../cadastro-cliente/item';

// Importa o serviço responsável por armazenar e manipular os clientes
import { PessoaServiceService } from '../../service/pessoa-service.service';

@Component({
  selector: 'app-lista',               // Nome da tag do componente
  standalone: true,                    // Indica que é um componente standalone
  imports: [FormsModule],              // Importa o FormsModule para usar ngModel
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  // Lista completa de clientes
  clientes: Item[] = [];

  // Lista utilizada para exibição e pesquisa
  clientesFiltrados: Item[] = [];

  // Texto digitado no campo de pesquisa
  nomePesquisa: string = '';

  // Injeta o Router e o serviço de clientes
  constructor(
    private router: Router,
    private pessoaService: PessoaServiceService
  ) {}

  // Executado automaticamente quando o componente é carregado
  ngOnInit(): void {
    this.carregarLista();
  }

  // Carrega os clientes do serviço
  carregarLista(): void {

    // Obtém todos os clientes cadastrados
    this.clientes = this.pessoaService.listar();

    // Copia os clientes para a lista exibida na tabela
    this.clientesFiltrados = [...this.clientes];

  }

  // Pesquisa clientes pelo nome
  pesquisar(): void {

    // Se o campo estiver vazio, mostra todos os clientes
    if (!this.nomePesquisa.trim()) {

      this.clientesFiltrados = [...this.clientes];
      return;

    }

    // Filtra os clientes cujo nome contém o texto digitado
    this.clientesFiltrados = this.clientes.filter(cliente =>
      cliente.nome.toLowerCase().includes(this.nomePesquisa.toLowerCase())
    );

  }

  // Envia o cliente selecionado para a tela de cadastro para edição
  editar(cliente: Item, indice: number): void {

    this.router.navigate(['/cadastro'], {
      state: {
        cliente: cliente,   // Objeto do cliente
        indice: indice      // Posição do cliente na lista
      }
    });

  }

  // Remove um cliente da lista
  deletar(indice: number): void {

    // Solicita ao serviço que exclua o cliente
    this.pessoaService.excluir(indice);

    // Atualiza a lista após a exclusão
    this.carregarLista();

  }

}