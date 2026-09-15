# My Blog

Meu espaço pessoal para **documentação, aprendizado e evolução** na área de tecnologia.

Este projeto funciona como um arquivo pessoal onde registro projetos, estudos, leituras, experiências e reflexões relacionadas a programação, desenvolvimento de software, Linux e computação.

> **Em construção.** O projeto evolui junto com meus estudos e experiências.

---

## 🧭 Sobre

A ideia do blog é ir além de um portfólio tradicional.

Aqui pretendo registrar:

* 🖥️ Desenvolvimento de software
* ☕ Java e Spring Boot
* 🐧 Linux e sistemas
* 🧠 Computação e fundamentos
* 🔧 Projetos pessoais
* 📚 Livros e leituras
* 📝 Artigos e anotações
* 💭 Reflexões e experiências
* 🚀 O que estou aprendendo e construindo

O objetivo é criar um **registro público da minha evolução como desenvolvedor**.

---

## 🛠️ Tecnologias

O projeto é construído utilizando uma stack simples e focada em conteúdo:

* [Astro](https://astro.build/)
* HTML
* CSS
* JavaScript
* Markdown
* Git

A proposta é evitar complexidade desnecessária e adicionar novas tecnologias somente quando elas resolverem algum problema real do projeto.

---

## 📁 Estrutura

```text
my-blog/
├── public/
│   ├── favicon.ico
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── Navbar.astro
│   │   └── Welcome.astro
│   │
│   ├── content/
│   │   ├── blog/
│   │   ├── leituras/
│   │   └── projetos/
│   │
│   ├── layouts/
│   │   └── MainLayout.astro
│   │
│   ├── pages/
│   │   ├── agora.astro
│   │   ├── index.astro
│   │   ├── leituras.astro
│   │   ├── projetos.astro
│   │   └── sobre.astro
│   │
│   └── styles/
│       ├── global.css
│       └── variables.css
│
├── astro.config.mjs
├── package.json
├── package-lock.json
└── tsconfig.json
```

A estrutura separa o projeto em algumas responsabilidades principais:

| Diretório     | Responsabilidade                       |
| ------------- | -------------------------------------- |
| `components/` | Componentes reutilizáveis da interface |
| `content/`    | Conteúdo do blog, projetos e leituras  |
| `layouts/`    | Estrutura das páginas                  |
| `pages/`      | Rotas do site                          |
| `styles/`     | Estilos globais e variáveis            |
| `public/`     | Arquivos públicos e assets             |

---

## 🚀 Executando localmente

### Pré-requisitos

* Node.js `>= 22.12.0`
* npm
* Git

### Clonar

```bash
git clone git@github.com:RonaldHiedley/my-blog.git
cd my-blog
```

### Instalar dependências

```bash
npm install
```

### Iniciar o ambiente de desenvolvimento

```bash
npm run dev
```

O Astro iniciará o servidor local para desenvolvimento.

### Gerar o build

```bash
npm run build
```

### Visualizar o build

```bash
npm run preview
```

---

## 📌 Status

O projeto está em desenvolvimento.

### Atualmente

* [x] Estrutura inicial do Astro
* [x] Layout principal
* [x] Navegação
* [x] Página inicial
* [x] Página de projetos
* [x] Página de leituras
* [x] Página "Agora"
* [x] Página "Sobre"
* [x] Organização inicial de conteúdo
* [x] Configuração do Git
* [x] Repositório no GitHub
* [ ] Identidade visual
* [ ] Sistema de artigos
* [ ] Páginas individuais de projetos
* [ ] Páginas individuais de leituras
* [ ] Metadados e SEO
* [ ] Publicação do site

---

## 🎯 Objetivo

Este projeto não pretende ser apenas um site pessoal.

A intenção é construir, aos poucos, uma espécie de **arquivo público da minha trajetória na computação**.

Em vez de registrar somente aquilo que já sei, quero também documentar aquilo que estou aprendendo, os problemas que encontro, os projetos que construo e as ideias que desenvolvo ao longo do caminho.

---

## 👨‍💻 Autor

**Ronald Hiedley**

Desenvolvedor de Software interessado em:

`Java` · `Spring Boot` · `Linux` · `Computação` · `Sistemas`

* GitHub: [RonaldHiedley](https://github.com/RonaldHiedley)
* LinkedIn: [ronald-hiedley](https://www.linkedin.com/in/ronald-hiedley/)

---

## 📜 Licença

Este projeto é pessoal e está em desenvolvimento.

A licença poderá ser definida posteriormente conforme a finalidade do projeto e de seus conteúdos.
