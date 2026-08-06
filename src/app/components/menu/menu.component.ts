// Importa o decorator Component do Angular
import { Component } from '@angular/core';

// Importa as diretivas de roteamento do Angular
// RouterLink: permite navegar entre rotas através de links
// RouterOutlet: local onde os componentes das rotas serão exibidos
import { RouterLink, RouterOutlet } from '@angular/router';

// Define o componente Menu
@Component({
  // Nome da tag HTML utilizada para inserir o componente
  selector: 'app-menu',

  // Indica que este é um componente standalone
  standalone: true,

  // Importa as diretivas necessárias para o template
  imports: [
    RouterLink,    // Permite utilizar a diretiva routerLink no HTML
    RouterOutlet   // Exibe o conteúdo das rotas no template
  ],

  // Arquivo HTML responsável pela estrutura do componente
  templateUrl: './menu.component.html',

  // Arquivo CSS responsável pela estilização do componente
  styleUrl: './menu.component.css'
})

// Classe do componente Menu
// Como toda a lógica está no template, a classe permanece vazia
export class MenuComponent {}