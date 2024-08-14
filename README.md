# Desafio - Pactto Clone

Desafio para a vaga de Dev. Front-end Jr. recriando o web app da [Pactto](https://pactto.com)

## 🛠️ Tecnologias

Esse site foi construído com os seguintes pacotes / tecnologias:

- [React](https://react.dev/)
- [Next.js](https://www.nextjs.org)
- [TailwindCSS](https://tailwindcss.com/)
- [Material Icons](https://mui.com/material-ui/material-icons/)
- [Headless UI](https://headlessui.com/)

## 🎨 Documentação de cores

| Cor          | Hexadecimal                                                      |
| ------------ | ---------------------------------------------------------------- |
| Yellow       | ![#ffba03](https://via.placeholder.com/10/ffba03?text=+) #ffba03 |
| Yellow-light | ![#ffdd81](https://via.placeholder.com/10/ffdd81?text=+) #ffdd81 |
| Yellow-light | ![#ffdd81](https://via.placeholder.com/10/ffdd81?text=+) #ffdd81 |
| Green-light  | ![#1cbaa6](https://via.placeholder.com/10/1cbaa6?text=+) #1cbaa6 |
| Gray-dark    | ![#2f2f2f](https://via.placeholder.com/10/2f2f2f?text=+) #2f2f2f |
| Gray-light   | ![#f3f3f2](https://via.placeholder.com/10/f3f3f2?text=+) #f3f3f2 |

## Demonstração

Insira um gif ou um link de alguma demonstração

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/evans-costa/pactto-clone
```

Entre no diretório do projeto

```bash
  cd pactto-clone
```

Instale as dependências

```bash
  npm install
```

Isso irá também instalar as dependências do [husky](https://github.com/typicode/husky) para usar os git hooks e os conventional commits na linha de comando.

Inicie o servidor

```bash
  npm run dev
```

A aplicação estará disponível em `localhost:3000`

## Melhorias

Algumas melhorias foram feitas com relação a aplicação original, dentre elas:

- A aplicação segue as brand guidelines da marca, com as cores descritas acima nesse `README`
- Componentização dos elementos mais comuns da interface da aplicação, evitando ao máximo uso de UI kits, sendo eles usados para criar pontualmente alguns componentes.
- A nível de projeto:
  - para padronizar futuras contribuições, foi instalado um gerenciador de hooks do git para usar de forma automática os [convetional commits](https://www.conventionalcommits.org/en/v1.0.0/), assim, ao fazer o `git commit` ele automaticamente fornece uma maneira conveniente de commitar as alterações.
  - Uso de linters para estilização e qualidade do código, com Prettier e ESLint, com uma GitHub Action para verificar no momento do push
