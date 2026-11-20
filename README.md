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
