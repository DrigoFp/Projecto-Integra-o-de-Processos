[![CI](https://github.com/DrigoFp/Projecto-Integra-o-de-Processos/actions/workflows/ci.yml/badge.svg)](https://github.com/DrigoFp/Projecto-Integra-o-de-Processos/actions/workflows/ci.yml)

# 🏋️‍♂️ Treinos App — Projeto Final Angular

Aplicação desenvolvida como projeto final da unidade curricular de **Integração de Processos / Angular**, permitindo gerir treinos, exercícios e estatísticas pessoais, com autenticação e armazenamento de dados através do **Supabase**.

---

## 📌 Funcionalidades Principais

### 🔐 Autenticação (Supabase Auth)
- Login com email e password.
- Logout com limpeza de sessão.
- Redirecionamento automático entre páginas protegidas e públicas.

### 🏋️‍♂️ Gestão de Treinos
#### ✔ Criar Treinos
- Definir nome, tipo, data e exercícios.
- Cada exercício inclui: **nome**, **peso**, **repetições**.

#### ✔ Listar Treinos
- Visualização em **cards** com UI melhorada.
- Filtros por tipo de treino.
- Estatísticas automáticas:
  - Total de treinos
  - Total de exercícios
  - Último treino realizado

#### ✔ Ver Detalhe do Treino
- Mostra todos os exercícios associados.
- Botões para **editar** e **apagar**.

#### ✔ Editar Treino
- Atualização completa dos dados.
- Integração com Supabase para atualizar registos.

#### ✔ Apagar Treino
- Remoção direta no Supabase.
- Confirmação antes de eliminar.

---

## 🧠 Arquitetura e Tecnologias

- **Angular 17+**
- **Standalone Components**
- **Angular Router**
- **Supabase (Auth + Database)**
- **RxJS (BehaviorSubject)**
- **TypeScript**
- **HTML / CSS**
- **Componentes reutilizáveis (KPI Cards, Header, Dashboard, etc.)**

---

## 📂 Estrutura do Projeto

```
src/app/
├── auth/
│   ├── login/
│   └── services/
├── dashboard/
├── treinos/
│   ├── lista/
│   ├── criar/
│   ├── editar/
│   ├── detalhe/
│   └── treino.service.ts
├── shared/
│   ├── components/kpi-card/
│   ├── models/
│   └── utils/
├── header/
├── footer/
└── app.routes.ts
```

---

## 🚀 Como Executar o Projeto

### 1️⃣ Instalar dependências
```bash
npm install
```

### 2️⃣ Iniciar o servidor de desenvolvimento
```bash
ng serve
```

### 3️⃣ Aceder à aplicação
```
http://localhost:4200
```

---

## 📦 Integração com Supabase

A aplicação utiliza:
- **Supabase Auth** para login/logout
- **Supabase Database** para guardar treinos e exercícios
- Métodos CRUD implementados no serviço `treino.service.ts`

---

## 🧾 Conclusão

Este projeto demonstra a criação de uma SPA em Angular com:
- Autenticação real
- Integração com backend (Supabase)
- Gestão de estado reativa com BehaviorSubject
- Componentes standalone
- UI moderna e modular
- Fluxo completo de CRUD de treinos

O resultado é uma aplicação funcional, escalável e alinhada com boas práticas de desenvolvimento frontend.

