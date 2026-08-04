import { Injectable } from '@angular/core';
import { Pessoa } from '../components/models/pessoas';

@Injectable({
  providedIn: 'root'
})
export class PessoaServiceService {
    private pessoas: Pessoa [] = []
   
    adicionar(pessoas: Pessoa){
      this.pessoas.push(pessoas)
    }

    listar(){
      return this.pessoas
    }
}
