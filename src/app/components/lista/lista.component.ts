import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Cliente {
  nome: string;
  email: string;
  cpf: string;
  datadenascimento: string;
  uf: string;
  municipio: string;
}

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  clientes: Cliente[] = [];
  clientesFiltrados: Cliente[] = [];
  nomePesquisa: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {

    // Dados de exemplo
    this.clientes = [
      {
        nome: 'João Silva',
        email: 'joao@email.com',
        cpf: '123.456.789-00',
        datadenascimento: '10/05/1995',
        uf: 'SP',
        municipio: 'São Paulo'
      },
      {
        nome: 'Maria Souza',
        email: 'maria@email.com',
        cpf: '987.654.321-00',
        datadenascimento: '20/08/1998',
        uf: 'RJ',
        municipio: 'Rio de Janeiro'
      }
    ];

    this.clientesFiltrados = [...this.clientes];
  }

  pesquisar(): void {

    if (!this.nomePesquisa.trim()) {
      this.clientesFiltrados = [...this.clientes];
      return;
    }

    this.clientesFiltrados = this.clientes.filter(cliente =>
      cliente.nome.toLowerCase().includes(this.nomePesquisa.toLowerCase())
    );
  }

  editar(cliente: Cliente): void {
    this.router.navigate(['/cadastro'], {
      state: { cliente }
    });
  }
    
  deletar(index: number): void {

    const cliente = this.clientesFiltrados[index];

    this.clientes = this.clientes.filter(c => c.cpf !== cliente.cpf);
    this.clientesFiltrados = [...this.clientes];

    alert('Cliente excluído com sucesso!');
  }

}