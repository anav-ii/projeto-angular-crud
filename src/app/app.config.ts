// Importa o tipo ApplicationConfig utilizado para configurar a aplicação Angular
import { ApplicationConfig } from '@angular/core';

// Importa a função responsável por configurar as rotas da aplicação
import { provideRouter } from '@angular/router';

// Importa a função que disponibiliza o HttpClient para realizar requisições HTTP
import { provideHttpClient } from '@angular/common/http';

// Importa o arquivo onde estão definidas as rotas da aplicação
import { routes } from './app.routes';

// Configuração principal da aplicação Angular
export const appConfig: ApplicationConfig = {

  // Lista de serviços (providers) que ficarão disponíveis em toda a aplicação
  providers: [

    // Configura o sistema de navegação utilizando as rotas definidas em app.routes.ts
    provideRouter(routes),

    // Disponibiliza o HttpClient para que a aplicação possa realizar
    // requisições HTTP (GET, POST, PUT, DELETE, etc.)
    provideHttpClient()

  ]

};