// Importa o TestBed, ferramenta do Angular usada para criar um ambiente
// de testes e configurar componentes antes de executá-los.
import { TestBed } from '@angular/core/testing';

// Importa o componente principal da aplicação que será testado.
import { AppComponent } from './app.component';


// Cria um grupo de testes para o AppComponent.
describe('AppComponent', () => {


  // Executado antes de cada teste.
  // Prepara o ambiente de testes configurando o componente.
  beforeEach(async () => {

    // Configura um módulo de teste do Angular.
    await TestBed.configureTestingModule({

      // Como o AppComponent é standalone,
      // ele é importado diretamente no ambiente de teste.
      imports: [AppComponent],

    })

    // Compila o componente, seu template HTML e seus estilos.
    .compileComponents();

  });


  // Teste 1: verifica se o componente é criado corretamente.
  it('should create the app', () => {

    // Cria uma instância do AppComponent para o teste.
    const fixture = TestBed.createComponent(AppComponent);

    // Obtém a instância da classe TypeScript do componente.
    const app = fixture.componentInstance;

    // Verifica se o componente existe.
    // Se o resultado for verdadeiro, o teste passa.
    expect(app).toBeTruthy();

  });


  // Teste 2: verifica se a variável "title" possui o valor esperado.
  it(`should have the 'projeto_crud_angular' title`, () => {

    // Cria uma instância do componente.
    const fixture = TestBed.createComponent(AppComponent);

    // Acessa a classe do componente.
    const app = fixture.componentInstance;

    // Verifica se a propriedade title possui o texto correto.
    expect(app.title).toEqual('projeto_crud_angular');

  });


  // Teste 3: verifica se o título aparece corretamente no HTML.
  it('should render title', () => {

    // Cria uma instância do componente.
    const fixture = TestBed.createComponent(AppComponent);

    // Executa a detecção de mudanças do Angular.
    // Isso atualiza o HTML com os valores do componente.
    fixture.detectChanges();

    // Acessa o elemento HTML gerado pelo componente.
    const compiled = fixture.nativeElement as HTMLElement;

    // Procura uma tag <h1> no HTML e verifica
    // se ela contém o texto esperado.
    expect(
      compiled.querySelector('h1')?.textContent
    ).toContain('Hello, projeto_crud_angular');

  });

});