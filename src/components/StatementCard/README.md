# StatementCard Component

Componente para os comunicados
## Props

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
  
## Como utilizar?

Exemplo 1 - Utilizando as props
```html
<statement-card :data="statement" details></statement-card>
```

