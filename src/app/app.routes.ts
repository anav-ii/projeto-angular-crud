// Importa o tipo Routes do Angular.
// Ele é utilizado para definir as rotas de navegação da aplicação.
import { Routes } from '@angular/router';

// Importa o componente responsável pelo cadastro de clientes
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';

// Importa o componente responsável pela listagem de clientes
import { ListaComponent } from './components/lista/lista.component';


// Cria uma constante contendo todas as rotas disponíveis na aplicação
export const routes: Routes = [

    {
        // Define o endereço (URL) para acessar a tela de cadastro
        // Exemplo: http://localhost:4200/cadastro
        path: 'cadastro',

        // Componente que será carregado quando essa rota for acessada
        component: CadastroClienteComponent
    },

    {
        // Define o endereço (URL) para acessar a tela de lista de clientes
        // Exemplo: http://localhost:4200/lista
        path: 'lista',

        // Componente que será carregado nessa rota
        component: ListaComponent
    },

];