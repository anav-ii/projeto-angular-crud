import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet, CadastroClienteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto_crud_angular';
}
