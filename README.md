# Desafio Front-End
Você acaba de receber sua primeira tarefa: 😎 
**Implementar a Listagem de Comunicados**

A tarefa já passou pelo designer, que criou o seguinte protótipo:
[Listagem de Comunicados - Protótipo](https://www.figma.com/file/YmxTthj1kDiJIXerYaSp6zkX/Desafio_Before) 🎨

Com base no protótipo, implemente a Listagem de Comunicados. Sua aplicação deverá consumir dados de uma api, para isso adicionamos junto ao projeto um servidor fake para devolver requisições nos endpoints:
- `/comunicados` : devolve a lista de comunicados
- `/tiposComunicados` : devolve os ids e os nomes das categorias de comunicados

O servidor também servirá arquivos estáticos que deverão ser acessados quando o comunicado possuir arquivos (campo *files* do comunicado).

### Descrição do módulo:
A listagem de comunicados servirá como agregador de comunicados do sistema, hoje existem 4 categorias de comunicados:
- Informativos SUN ![#FF9900](https://placehold.it/15/FF9900/000000?text=+) `#FF9900`  
- Força de Vendas ![#56CCF2](https://placehold.it/15/56CCF2/000000?text=+) `#56CCF2`
- Vivo Ligado ![#79C126](https://placehold.it/15/79C126/000000?text=+) `#79C126`  
- Turbine Suas Vendas ![#660099](https://placehold.it/15/660099/000000?text=+) `#660099` 

O módulo deverá exibir todos os comunicados disponíveis para aquele usuário. O usuário poderá filtrar os comunicados através das categorias. Ao clicar em um comunicado o seu conteúdo deverá ser exibido e o mesmo deverá ser marcado como lido.

> será necessário fazer a tela de visualização do comunicado, você terá que usar suas noções de UI e UX para criar essa visualização!

### Requisitos Obrigatórios
- Não utilize um gerador de projeto (yeoman) ou cli de configuração (vue-cli, react-create-app etc)
- O projeto deve ser criado com um framework Javascript orientado a componentes (Vue, React, Angular etc)
- Sua aplicação deve consumir os dados fornecido pela api.
- Utilize um linter de JS
- Não use jQuery

### Diferenciais
- Utilize um pré-processador de CSS (Sass, Stylus, Less etc) ou estruture seu CSS com alguma metodologia (OOCSS, BEM, SMACSS etc)
- Sua aplicação deve manter o estado consistente, ou seja, uma vez lido, um comunicado deverá ser marcado como lido e manter este estado. (Utilize alguma forma de storage, ou o próprio json-server para editar o comunicado)
- Crie um passo-a-passo de como utilizar sua aplicação (scripts de inicialização, build etc)
- Utilize ES6
- Seu código deve ser coberto por testes de unidade, utilize qualquer framework de teste (Jest, Mocha, Jasmine etc)

### Passo-a-passo
1. Faça um **fork** deste repositório para sua conta pessoal do github
2. Clone o projeto
    ``git clone url``
3. Instale as dependências
    ``npm install``
4. Inicie o servidor fake
    ``npm run server``

Ao terminar faça um pull request! :octocat:
> 💡 Caso tenha dúvida não deixe de perguntar

### Dicas
- Confira os dados dos endpoints na url http://localhost:84/endpoint, alguns dados terão que ser tratados!
- O módulo deverá ser responsivo para uma tela desktop, parta do princípio mobile first
- Estruture bem o seu código e sua arquitetura
- Pense sempre que alguém irá ler seu código e que os requisitos podem mudar
- Teste!

👊 Bom desafio!

