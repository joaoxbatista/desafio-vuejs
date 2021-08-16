# Card StatementFileList

Componente para listagem de arquivos do comunicado


## Props

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
  
## Como utilizar?

Exemplo 1 - Utilizando as props
```html
<statement-card :data="statement" details></statement-card>
```

