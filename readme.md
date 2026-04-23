# Projeto de Testes Automatizados – Sistema Inventário CTI

## 📌 Descrição

Este projeto tem como objetivo validar as principais funcionalidades do sistema **Inventário CTI**, por meio de testes automatizados utilizando Cypress.

Foram cobertos fluxos críticos da aplicação, incluindo cadastro, edição, geração de termos e relatórios, com foco em **qualidade, confiabilidade e identificação de falhas**.

---

## 🎯 Escopo dos Testes

As seguintes funcionalidades foram contempladas:

* Cadastro de Atribuições
* Edição de Atribuições
* Geração de Termos (Responsabilidade e Empréstimo)
* Relatório de Movimentação de Ativos
* Relatório de Atribuições por Área

Também foram validadas:

* Regras de negócio
* Campos obrigatórios
* Interações de UI (modais, botões, checkboxes)
* Geração de arquivos PDF

---

## 🧪 Estratégia de Teste

* Testes End-to-End (E2E) com Cypress
* Cobertura de cenários positivos e negativos
* Validação de regras de negócio e comportamento da interface
* Identificação e documentação de defeitos durante a execução

---

## 📄 Documentação

Os documentos do projeto estão disponíveis na pasta `docs/`:

* 📄 `plano-de-teste-inventario.pdf`
* 📄 `cenarios-de-teste-inventario.pdf`
* 📄 `bugs-melhorias-duvidas-inventario.pdf`

Esses documentos contemplam:

* Plano de teste completo (estratégia, critérios de entrada/saída, riscos)
* Cenários estruturados em BDD (positivos, negativos, regras de negócio)
* Registro de bugs, melhorias e dúvidas de regra

---

## 🏗️ Estrutura do Projeto

```bash
cypress/
 ├── e2e/
 │    ├── cadastrarAtribuicao.cy.js
 │    ├── editarAtribuicao.cy.js
 │    ├── gerarTermos.cy.js
 │    ├── relatorioAtribuicaoPorArea.cy.js
 │    ├── relatorioMovimentacaoAtivos.cy.js

 ├── fixtures/
 ├── reports/
 ├── support/
 │    ├── pages/
 │    │    ├── atribuicaoPages.js
 │    │    ├── inventarioPages.js
 │    │    ├── relatorioAtribuicaoPages.js
 │    │    ├── relatorioMovimentacoesPages.js
 │    │
 │    ├── commands.js
 │    ├── e2e.js

docs/
 ├── plano-de-teste-inventario.pdf
 ├── cenarios-de-teste-inventario.pdf
 ├── bugs-melhorias-duvidas-inventario.pdf
```

---

## ⚙️ Tecnologias Utilizadas

* Cypress
* JavaScript
* Node.js

---

## 🔐 Autenticação

O login foi tratado como pré-condição dos testes, sendo encapsulado em método reutilizável.

Em um cenário futuro de evolução do projeto, pode ser utilizado o recurso `cy.session()` para otimizar a execução e evitar múltiplos logins.

---

## 🧩 Boas Práticas Adotadas

* Uso de **Page Object Model (POM)**
* Separação entre ações (pages) e validações (testes)
* Reutilização de funções para reduzir duplicidade
* Estruturação dos cenários em formato BDD
* Uso de seletores estáveis sempre que possível

---

## ⚠️ Limitações Encontradas

Durante a automação, foram identificadas algumas limitações:

* Ausência de identificadores específicos para automação (ex: `data-cy`)
* Elementos com seletores instáveis ou baseados na estrutura do DOM
* Mensagens de validação não associadas diretamente aos campos
* Dificuldade de automação em componentes dinâmicos (ex: tooltips)

Alguns cenários foram mantidos como **testes manuais** devido a essas limitações.

---

## 🐞 Bugs e Melhorias

Durante a execução dos testes, foram identificados:

* Bugs funcionais relevantes
* Inconsistências de validação
* Problemas de usabilidade e testabilidade

Todos os pontos estão documentados em:

📄 `docs/bugs-melhorias-duvidas-inventario.pdf`

---

## 📊 Evidências

* Prints automáticos em caso de falha
* Vídeos gerados automaticamente pelo Cypress
* Evidências organizadas na pasta `/cypress/reports`

---

## 📌 Observações Importantes

Foi identificada inconsistência nos critérios de aceitação entre as histórias de usuário relacionadas a relatórios.

A história de usuário de **Relatório de Atribuições por Área** apresenta critérios de aceitação idênticos aos da **História de Relatório de Movimentação de Ativos**, apesar de se referirem a telas e funcionalidades distintas.

Dessa forma, os cenários de teste foram elaborados com base no comportamento real observado na aplicação.

---

## ▶️ Como executar o projeto

### Instalar dependências

```bash
npm install
```

### Executar testes em modo interativo

```bash
npx cypress open
```

### Executar testes em modo headless

```bash
npx cypress run
```

---

## 🚀 Considerações Finais

O projeto foi desenvolvido com foco em:

* Organização e clareza do código
* Cobertura de cenários relevantes
* Identificação de problemas reais da aplicação

Durante a execução dos testes, foi possível identificar comportamentos inconsistentes e limitações da aplicação, principalmente relacionadas à validação de campos e testabilidade.

Os pontos encontrados foram documentados e podem servir como base para melhorias futuras no sistema.

Além da automação dos testes, o projeto também contribuiu para uma análise mais crítica das regras de negócio e da experiência do usuário.
