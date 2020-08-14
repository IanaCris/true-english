<p align="center">
  <img src="./.github/true_english.svg" alt="True English" />
</p>

<h1 name="sobre">ℹ Sobre o Projeto</h1>
Projeto True English foi construido durante a semana do dia 3 a 7 de agosto de 2020 na Next Level Week, tivemos mais de 110mil devs participando do evento.
True English está baseado no Projeto Proffy que é um projeto em homenagem ao dia nacional do profissional de educação! 👨‍🏫 <br>
Uma plataforma que conecta alunos com professores. 🎯

<h1 name="preview">:eyes: Preview do Projeto</h1>
<h3>Web</h3>
<img alt="Results1" title="landing web" src=".github/landing_web.png" width="400px"/>
<h3>App Mobile (IOS & Android)</h3>
<img alt="Results2" title="landing mobile" src=".github/landing_mobile.jpg" width="400px"/>

<h1 name="run">:boom: Como Executar o projeto</h1> <br>

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - Por fim, é **essencial** ter o **[Expo](https://expo.io/)** instalado de forma global na máquina

```bash
# Clone Repository
$ git clone https://github.com/IanaCris/true-english.git
```

<h3 name='api'>📦 Ligar a API</h3><br>

```bash
# Vá até a pasta
$ cd true-english/server

# Instale as dependências
$ yarn # ou npm install

# Configurando o banco de dados e criando as tabelas.
$ yarn knex:migrate # ou npm run knex:migrate

# Ligue a API
$ yarn start # ou npm start
```
Acesse API em http://localhost:3333/

<h3 name='website'>💻 Visualizar WebSite</h3><br>

```bash
# Vá até a pasta
$ cd true-english/web

# Instale as dependências
$ yarn # ou npm install

# Ligue o servidor
$ yarn start # ou npm start
```
Vá para http://localhost:3000/ para ver o website.

<h3 name='mob'>📱 Rodar projeto no celular</h3><br>
Para ver o projeto no celular você precisa ter o [expo](https://play.google.com/store/apps/details?id=host.exp.exponent) instalado ou um emulador android/ios.
<br />
Depois, fork esse repositorio ou clone em sua máquina. Dentro do projeto rode os comandos:

```bash
# Ir para a pasta
$ cd true-english/mobile

# Instale as dependências
$ yarn # ou npm install

# Ligue o App
$ yarn start # ou npm start
```
Irá abrir uma aba no seu navegador e apacerá um QR Code, se escanear ele no aplicativo Expo, abrirá a aplicação. Terá uma opção para rodar em um emulador também.

<h1 name="tecnologias">🛠 Tecnologias</h1>

As seguintes ferramentas foram usadas na construção do projeto:

- [Expo](https://expo.io/)
- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [axios](https://github.com/axios/axios)
