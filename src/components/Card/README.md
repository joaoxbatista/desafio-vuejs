# Card Component

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
