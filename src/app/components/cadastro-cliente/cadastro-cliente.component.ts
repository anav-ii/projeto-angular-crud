import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-cadastro-cliente',
  standalone: true,
  imports: [Item],
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css'
})
export class CadastroClienteComponent {
  nome: string = ''
  email: string =''
  cpf: string = ''
  datadenascimento: string | number = ''
  uf: string = ''
  municipio: string = ''
  listaClientes : Cliente [] = []

  addCliente (){

    let Clientes = new cliente ()
    Item.nome = 
  }

  }
}

