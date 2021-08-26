# Desafio Front-End

Você acaba de receber sua primeira tarefa: 😎
**Implementar a Listagem de Comunicados**

A tarefa já passou pelo designer, que criou o seguinte protótipo:
[Listagem de Comunicados - Protótipo](https://www.figma.com/file/YmxTthj1kDiJIXerYaSp6zkX/Desafio_Before) 🎨

Com base no protótipo, implemente a Listagem de Comunicados. Sua aplicação deverá consumir dados de uma api, para isso adicionamos junto ao projeto um servidor fake para devolver requisições nos endpoints:

- `/comunicados` : devolve a lista de comunicados
- `/tiposComunicados` : devolve os ids e os nomes das categorias de comunicados

O servidor também servirá arquivos estáticos que deverão ser acessados quando o comunicado possuir arquivos (campo _files_ do comunicado).

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
   `git clone url`
3. Instale as dependências
   `npm install`
4. Inicie o servidor fake
   `npm run server`

Ao terminar faça um pull request! :octocat:

> 💡 Caso tenha dúvida não deixe de perguntar

### Dicas

- Confira os dados dos endpoints na url http://localhost:84/endpoint, alguns dados terão que ser tratados!
- O módulo deverá ser responsivo para uma tela desktop, parta do princípio mobile first
- Estruture bem o seu código e sua arquitetura
- Pense sempre que alguém irá ler seu código e que os requisitos podem mudar
- Teste!

👊 Bom desafio!




-------------------------------------------

## Resultado
![Imagem da aplicação](https://i.ibb.co/fF3krf3/1.gif)

Esse projeto foi desenvolvido utilizando o framework Vue.js e as seguintes bibliotecas:

**vue:** na versão  2.6.14

**vuex:** na versão  3.6.2

**vue-router:** na versão  3.5.2

**vue-awesome-swiper:**  na versão  4.1.1

**axios:** na versão 0.21.1

**sass:** na versão 1.37.5

**moment:** na versão 2.29.1

## Como rodar a aplicação

**1. Clone o projeto**

```bash
git clone url
```

**2. Instale as dependências**

```bash
npm install
```

**3. Inicie o servidor fake**

```bash
npm run server
```

**4. Inicie a aplicação**

Existem dois modos de rodar a aplicação, sendo elas:

**1. Rode a aplicação em modo de desenvolvimento**

```bash
npm run dev
```

**2. Rode a aplicação com os arquivos já buildados**

Esso comando gera os bundles que ficaram armazenados em /dist/build. Existem um arquivo /dist/index.html onde o mesmo importa os arquivos do build corretamente. Ignore o arquivo /dist/build/index.html.

Caso já existam arquivos na pasta **/dist/build** basta apenas executar o seguindo comando

```bash
npm run prod
```

Esse comando roda o lite-server na pasta dist

```bash
npm run client
```
---

## Card Component

Componente Genérico para criação de cards

## Slots

> title: card-header

## Props

> title:

- **type**: string
  
> borderColor:

- **type**: string
- **aceppted**: ['blue', 'orange', 'green', 'purple']

> disabled:

- **type**: boolean
- **aceppted**: (true|false)
  
## Como utilizar?

Exemplo 1 - Utilizando as props
```html
<Card title="Card 1" borderColor="orange" class="mb-14">
  Informaçoes do card 1
</Card>
<Card title="Card 2" borderColor="purple" class="mb-14">
  Informaçoes do card 2
</Card>
<Card title="Card 3" borderColor="blue" class="mb-14">
  Informaçoes do card 3
</Card>
<Card title="Card 4" borderColor="green" class="mb-14">
  Informaçoes do card 4
</Card>
<Card title="Card 1" borderColor="orange" disabled class="mb-14">
  Informaçoes do card desabilitado 1
</Card>
<Card title="Card 2" borderColor="purple" disabled class="mb-14">
  Informaçoes do card desabilitado 2
</Card>
<Card title="Card 3" borderColor="blue" disabled class="mb-14">
  Informaçoes do card desabilitado 3
</Card>
<Card title="Card 4" borderColor="green" disabled class="mb-14">
  Informaçoes do card desabilitado 4
</Card>
```

Exemplo 2 - Utilizando os slots
```html
<Card 
  class="statement-card" 
  :borderColor="borderColor" 
  :disabled="data.seen"
>
  <template v-slot:card-header>
    <router-link 
    :to="{ 
      name: 'statements.show', 
      params: { id: data.id } }
    ">
      <div class="statement-card__header">
        <h3 class="card__title">{{ data.title }}</h3>
        <h4 class="statement-card__id">{{ data.id }}</h4>
      </div>
    </router-link>
  </template>
</Card>
```

## StatementCard Component

Componente para os comunicados
### Props

> data:

- **type**: object
- **aceppted**: 
```
{
  id: number,
  title: string,
  seen: boolean,
  type: int,
  description: string,
  fullDescription": string,
  date: string,
  files: [
    {
      "type": string,
      "name": string,
      "url": string
    }
  ]
}
```
  
> details:

- **type**: boolean
- **aceppted**: (true|false)
  
### Como utilizar?

Exemplo 1 - Utilizando as props
```html
<statement-card :data="statement" details></statement-card>
```


## Card StatementFileList

Componente para listagem de arquivos do comunicado


### Props

> files:

- **type**: array
- **aceppted**: 
```
[
  {
    "type": string,
    "name": string,
    "url": string
  }
]
```
  
> borderColor:

- **type**: string
- **aceppted**: ['blue', 'orange', 'green', 'purple']

> disabled:

- **type**: boolean
- **aceppted**: (true|false)
  
### Como utilizar?

Exemplo 1 - Utilizando as props
```html
<statement-card :data="statement" details></statement-card>
```




