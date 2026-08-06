// Importa o decorator Component do Angular,
// utilizado para criar um componente.
import { Component } from '@angular/core';

// Importa o RouterOutlet, que permite exibir os componentes
// correspondentes às rotas configuradas na aplicação.
import { RouterOutlet } from '@angular/router';

// Importa o componente de cadastro de clientes.
// Esse componente pode ser utilizado dentro do template.
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';


// Define as configurações do componente principal da aplicação.
@Component({

  // Nome da tag HTML usada para chamar esse componente.
  // Exemplo: <app-menu></app-menu>
  selector: 'app-menu',

  // Indica que este é um componente independente (Standalone),
  // não precisando estar declarado em um NgModule.
  standalone: true,

  // Componentes e recursos que podem ser utilizados no HTML deste componente.
  imports: [

    // Permite que o sistema de rotas carregue componentes dentro do template.
    RouterOutlet,

    // Permite utilizar o componente de cadastro diretamente no HTML.
    CadastroClienteComponent

  ],

  // Arquivo HTML que define a estrutura visual do componente principal.
  templateUrl: './app.component.html',

  // Arquivo CSS responsável pela estilização do componente.
  styleUrl: './app.component.css'

})

// Classe principal do componente da aplicação.
export class AppComponent {

  // Variável utilizada para armazenar o título da aplicação.
  // Pode ser exibida no HTML através de interpolação:
  // {{ title }}
  title = 'projeto_crud_angular';

}