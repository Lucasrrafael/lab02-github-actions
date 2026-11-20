# Laboratório 02 — GitHub Actions (CI/CD · Web Academy UFAM)

## Etapa 1 — Projeto simples local

Pasta [`etapa1-projeto-local`](etapa1-projeto-local): projeto Node.js + TypeScript criado localmente
(boletim com média e situação dos alunos).

Workflow [`etapa1-build.yml`](.github/workflows/etapa1-build.yml), disparado por push na `main`:

1. checkout do código;
2. configuração do ambiente (Node.js 22);
3. instalação das dependências (`npm ci`);
4. build (`npm run build` → `tsc`);
5. execução (`npm start`).

## Etapa 2 — Projeto pronto

Pasta [`etapa2-projeto-pronto`](etapa2-projeto-pronto): projeto React + Vite fornecido pelo professor
(lint com ESLint, testes com Vitest e build com Vite).

O mesmo pipeline (instalar → lint → testar → build → deploy) configurado de três formas,
todas disparadas pelo mesmo push:

| Workflow | Arquivo | Configuração |
|---|---|---|
| Build V1 | [`etapa2-build01.yml`](.github/workflows/etapa2-build01.yml) | um único job com todas as etapas em sequência |
| Build V2 | [`etapa2-build02.yml`](.github/workflows/etapa2-build02.yml) | três jobs independentes (`lint`, `test`, `deploy`) em paralelo |
| Build V3 | [`etapa2-build03.yml`](.github/workflows/etapa2-build03.yml) | os mesmos três jobs encadeados com `needs` (lint → test → deploy) |

Como o repositório tem dois projetos, os workflows usam `defaults.run.working-directory`
e filtros `paths`, para que cada etapa só rode quando a sua pasta mudar.
