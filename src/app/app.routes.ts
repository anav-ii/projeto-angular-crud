import { Routes } from '@angular/router';

import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component'
import { ListaComponent } from './components/lista/lista.component';

export const routes: Routes = [
    {
        path: 'cadastro',
        component: CadastroClienteComponent
    },

    {
        path: 'lista',
        component: ListaComponent
    },

];
