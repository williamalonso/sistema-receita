<h1 align="center">
    Sistema de Receitas Culinárias
</h1>

<div align="center">
  <img src="/home.png" alt"Imagem com a mensagem em construção" title="Imagem com a mensagem em construção" width="600" />
</div>

---




### 🤔 Sobre o Projeto?

Trata-se de um app que lista Receitas Culinárias da API [Spoonacular](https://spoonacular.com/food-api)

---

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://react.dev/)
- [Redux](https://react-redux.js.org/)
- [Styled Component](https://styled-components.com/)
- [React Router](https://reactrouter.com/en/main)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons)
- [React Splide](https://splidejs.com)
- [React Bootstrap](https://react-bootstrap.github.io)
- [Json Server](https://www.npmjs.com/package/json-server)

---

### ✨ Sobre a construção do projeto:

- É exibida uma lista dos principais pratos;
- É possível pesquisar por uma receita;
- É possível filtrar as receitas;

---

## 🙅 Instalações e usos

Esse projeto foi desenvolvido usando o [Github Codespaces](https://github.com/features/codespaces)

A versão React do projeto é a `18.2.0`.

A versão do Redux é a `8.1.2`;

A versão do Styled-Component é a `6.0.5`;

A versão do Router é a `6.14.2`;

A versão do Node é `20.4.0`.

Caso queira, clone ou faça o downlod desse repositório:

```
# Clone o repositório
$ git clone git@github.com:williamalonso/sistema-receita-culinaria.git
```

Após baixar ou clonar, rode o comando `npm i`.

Para rodar a aplicação na sua máquina usando o VSCode, vá no arquivo `package.json` e remova o `BROWSER=none WDS_SOCKET_PORT=0` na linha abaixo:
```js
"start": "BROWSER=none WDS_SOCKET_PORT=0 react-scripts start",
```
Após isso, crie uma conta na [Spoonacular](https://spoonacular.com/food-api) para pegar uma apiKey.

com a apiKey, crie o arquivo `.env` e dentro dele crie a variável:
```js
REACT_APP_API_KEY={cole_sua_chave}
```

Após isso, dê o comando `npm start` na pasta principal do projeto.
Por fim, entre na apsta `backend` e também rode o comando `npm start` para rodar alguns cards que estão armazenados no JSON Server.

<h3 align="center">William Alonso</h3>
