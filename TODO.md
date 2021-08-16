# Projeto - Desafio Front-End Before

## Instalação e Organização do Projeto com Vue.js

Como nos requisitos obrigatórios está descrito que não é válido utilizar o vue-cli, criei um projeto com Webpack (Empacotador de módulos para aplicações javascript), configurei os loaders e plugins necessários para rodar uma aplicação Vue.js.

Como uma das recomendações é a utilização de um pré-processador CSS, instalei os loaders necessários para trabalhar com Sass.

## Instalar o ESLint + Prettier + Husk + Lint Staged

```
npm install eslint prettier husky lint-staged --save-dev
```

Configurando o ESLint
```
.eslintrc.js
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    }
};
```

Configurando o Prettier
```
.prettierrc
{
  "tabWidth": 2,
  "useTabs": false
}
```

Configurando husky
```
    - package.json

    "husky": {
        "hooks": {
            "pre-commit": "lint-staged"
        }
    }
```

Configurando o lint-staged
```
    - package.json

    "lint-staged": {
        "*.js": "prettier --write"
    }
```

## Vue-router

Adicionar esse trecho para funcionar em ambiente desenvolvimento com webpack.
```
devServer: {
    historyApiFallback: true,
},
```