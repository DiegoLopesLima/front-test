# Octadesk front-end test
Repositório que visa centralizar os testes de front-end da Octadesk.

## Modelo de participação:

- Realizar um fork do repositório;
- Realizar os commits relacionados ao desafio;
- Abrir um pull-request para o repositório forkado.

## Desafio:
- [x] Criar uma aplicação em javascript semelhante a lista de conversas do Whatsapp utilizando qualquer framework que desejar.

### Considerações:
- [x] Utilizar features do ES6+ como async/await, object destructuring, map/spread operators;
- [x] Possuir um layout responsivo;
- [x] Utilizar dados falsos para simular as conversas;
- [x] Documentação descrevendo a metodologia utilizada;

### Diferenciais:
- [x] Utilizar React e Redux;
- [x] Utilizar TypeScript;
- [x] Utilizar testes automatizados;
- [x] Configuração Webpack do zero;
- [x] Utilizar metodologias e boas práticas de código;

## Metodologia
O conteúdo a seguir descreve o processo de planejamento e realização do desafio.

### Levantamento de requisitos
Foi realizado um estudo de comportamento da referência WhatsApp sugerida no desafio. Através deste estudo foi possível levantar o comportamento básico possível para o prazo sugerido assim como um rascunho de backlog levando em consideração também, os diferenciais sugeridos. Com isso, foi possível chegar a uma ideia de MVP.

Analisando o desafio por completo, defini que o melhor framework compatível com as espectativas levantadas atualmente é o React.

Fiz um levantamento de algumas outras ferramentas que poderiam ser utilizadas com base nos requisitos. Dentre elas estão:

- Redux e Redux Saga para gerenciamento de estado e de efeitos colaterais assíncronos.
- Webpack como module bundler.
- Jest para testes de unidades.
- Typescript para tipagem.
- Yarn como gerenciador de pacotes.
- Bootstrap como framework CSS.
- Sass com pré-processador CSS.
- data-fns para manipulação de formatos de tempo.
- Axios para requisições assíncronas.

### Planejamento
Com a relação de requisitos clara, foi utilizada a ferramenta de Projetos do Github para organizar o backlog em um Kanban simples por onde foi possível organizar e acompanhar todo o progresso do desenvolvimento da aplicação, deixando claro o que estava pendente, as possíveis implementações e prioridades.

[Projeto 1](https://github.com/DiegoLopesLima/front-test/projects/1)

Para definir a prioridade de desenvolvimento, foram considerados o MVP planejado e as exigências descritas no desafio.

![alt text](https://i.imgur.com/SgnKDlF.png)

![alt text](https://i.imgur.com/gK2czrM.png)

Após a organização inicial do Kanban com os principais itens do backlog, foi planejada uma estrutura básica de pastas com foco em legibilidade e escalabilidade.

![alt text](https://i.imgur.com/w5BAa08.png)

Também foi criado um documento de texto com uma cópia da descrição do desafio onde os trechos de exigências ou diferenciais foram demarcados com cores durante o processo de desenvolvimento para tornar visível as pendências em relação ao que foi pedido.

![alt text](https://i.imgur.com/sAAknsb.png)

### Outras informações

- Para tornar o chat um pouco mais próximo de um chat real, tomei a liberdade de criar outro repositório com uma aplicação simples em Node.js. Por tanto para rodar este projeto, será necessário executar duas aplicações. A API do repositório https://github.com/DiegoLopesLima/front-test-server e a branch criada para a aplicação client side (`feature/project-1`). Esta aplicação server-side possui uma estrutura muito simples com uma API de mockup.
- Apesar do repositório para server-side, não foram adicionados recursos para comunicação real time.
- Para a aplicação server-side foi utilizado o Express.js em uma estrutura customizada.
- Para organizar e testar minhas chamadas para o servidor de mockup utilizei o Insomnia.

### Executando a aplicação

- Clone o repositório do fork (client-side) e o repositório server-side:
  ```
  git clone https://github.com/DiegoLopesLima/front-test.git
  git clone https://github.com/DiegoLopesLima/front-test-server.git
  ```
- Acesse a pasta `front-test` através do terminal e utilize o comando `git checkout feature/project-1` para obter o código da branch de desenvolvimento.
- Acesse a pasta `front-test-server` através do terminal de comandos e utilize o comando `yarn` para instalar todas as dependências da aplicação, em seguida faça o mesmo na pasta `front-test`.
- Acesse a pasta `front-test-server` através do terminal de comandos e utilize o comando `yarn start` para levantar o servidor de API.
- Acesse a pasta `front-test` através do terminal de comandos e utilize o comando `yarn serve` para iniciar a aplicação. Seu navegador vai abrir a aplicação automaticamente.
