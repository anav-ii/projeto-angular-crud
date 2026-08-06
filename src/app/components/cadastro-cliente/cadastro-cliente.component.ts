// Importa os recursos necessários do Angular
import { Component, OnInit } from '@angular/core';

// Importa a classe que representa um cliente
import { Item } from './item';

// Importa módulos utilizados no template
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importa o serviço responsável por armazenar e manipular os clientes
import { PessoaServiceService } from '../../service/pessoa-service.service';

// Importa o serviço de navegação entre páginas
import { Router } from '@angular/router';

@Component({
  // Nome da tag utilizada para inserir o componente no HTML
  selector: 'app-cadastro-cliente',

  // Define o componente como standalone
  standalone: true,

  // Módulos utilizados pelo componente
  imports: [FormsModule, CommonModule],

  // Arquivo HTML do componente
  templateUrl: './cadastro-cliente.component.html',

  // Arquivo CSS do componente
  styleUrl: './cadastro-cliente.component.css'
})
export class CadastroClienteComponent implements OnInit {

  // Objeto que representa o cliente que será cadastrado ou editado
  cliente: Item = new Item();

  // Armazena o índice do cliente em edição
  // Valor -1 indica que não há edição em andamento
  indiceEdicao: number = -1;

  // Injeta o serviço de clientes e o serviço de navegação
  constructor(
    private pessoaService: PessoaServiceService,
    private router: Router
  ) {}

  // Método responsável por cadastrar um novo cliente
  salvar(): void {

    // Cria um novo objeto Item
    let item = new Item();

    // Copia os dados informados no formulário
    item.nome = this.cliente.nome;
    item.email = this.cliente.email;
    item.cpf = this.cliente.cpf;
    item.datadenascimento = this.cliente.datadenascimento;
    item.uf = this.cliente.uf;
    item.municipio = this.cliente.municipio;

    // Adiciona o cliente ao serviço
    this.pessoaService.adicionar(item);

    // Limpa o formulário
    this.cliente = new Item();

    // Redireciona para a tela de listagem
    this.router.navigate(['/lista']);
  }

  // Método responsável por atualizar um cliente existente
  atualizar(): void {

    // Atualiza o cliente no serviço utilizando o índice recebido
    this.pessoaService.atualizar(this.indiceEdicao, this.cliente);

    // Limpa o formulário
    this.cliente = new Item();

    // Reinicia o índice de edição
    this.indiceEdicao = -1;

    // Retorna para a tela de listagem
    this.router.navigate(['/lista']);
  }

  // Executado automaticamente quando o componente é carregado
  ngOnInit(): void {

    // Recupera os dados enviados pela tela de lista
    const cliente = history.state.cliente;
    const indice = history.state.indice;

    // Verifica se o componente foi aberto para edição
    if (cliente != null) {

      // Copia os dados do cliente para o formulário
      this.cliente = { ...cliente };

      // Armazena o índice do cliente que será atualizado
      this.indiceEdicao = indice;

    }

  }

}