<!--
  ===========================================================
  COMO USAR ESTE TEMPLATE
  ===========================================================
  Substitua os textos entre colchetes [ASSIM] pelas
  informações do seu projeto. Depois, apague este bloco
  de comentário (ele não aparece renderizado no GitHub).

  Placeholders usados neste arquivo:
    [NOME_DO_PROJETO]        -> nome do projeto/repositório
    [ENTIDADE_1], [ENTIDADE_2], [ENTIDADE_3]
                              -> nomes das entidades/tabelas do schema
    [ARQUIVO_ENTIDADE_1] etc -> caminho do arquivo de cada entidade
    [FERRAMENTA_ORM]         -> nome do ORM/lib usada (ex: Drizzle, Prisma)
    [FRAMEWORK_BACKEND]      -> framework usado (ex: Express, Fastify)
    [SERVICO_BANCO]          -> serviço de banco (ex: neon.tech, Supabase)
  ===========================================================
-->

# 🤝 Acordo de Contribuição e Versionamento — [NOME_DO_PROJETO]

Este documento define as regras de versionamento que todo o código deste projeto deve seguir. O objetivo é simular um ambiente real de desenvolvimento, garantindo segurança e organização.

---

## 1. A Regra de Ouro (Branch `main`)

A branch `main` é sagrada. **Nenhum código deve ser commitado diretamente nela.**

Ela deve conter apenas código testado, funcionando e que não quebre o servidor. Toda nova funcionalidade deve nascer em uma branch separada.

---

## 2. Nomenclatura de Branches

O projeto utiliza uma estrutura modular (um arquivo de schema para cada entidade). As branches devem refletir exatamente essa separação física.

| Prefixo | Quando usar |
|---|---|
| `feature/nome-da-funcionalidade` | Para novas tabelas, rotas ou telas |
| `fix/nome-do-bug` | Para correções de erros |

**Exemplo de Fluxo Modular:**

| Branch | Ação |
|---|---|
| `feature/schema-[ENTIDADE_1]` | Criação do arquivo `[ARQUIVO_ENTIDADE_1]` |
| `feature/schema-[ENTIDADE_2]` | Criação do arquivo `[ARQUIVO_ENTIDADE_2]` |
| `feature/schema-[ENTIDADE_3]` | Criação do arquivo `[ARQUIVO_ENTIDADE_3]` |

> 💡 Para adicionar uma nova entidade, basta copiar o padrão acima trocando o nome da entidade e o caminho do arquivo.

---

## 3. Padrão de Commits

As mensagens de commit devem ser curtas, diretas e usar verbos no infinitivo, indicando a ação realizada.

* ❌ **Ruim:** "atualizando banco", "arquivos novos", "mudanças na aula 4"
* ✅ **Bom:** `feat: criar entidade de [ENTIDADE_1] e chave primaria`
* ✅ **Bom:** `fix: corrigir erro de importação no [FERRAMENTA_ORM]`
* ✅ **Bom:** `docs: adicionar documentacao de rotas no README`

**Prefixos recomendados:**

| Prefixo | Uso |
|---|---|
| `feat:` | Nova funcionalidade |
| `fix:` | Correção de bug |
| `docs:` | Alteração em documentação |
| `refactor:` | Refatoração sem mudança de comportamento |
| `chore:` | Tarefas de manutenção (configs, dependências, etc.) |

---

## 4. O Fluxo de PR Solitário (Passo a Passo)

Como este é um projeto individual, você será o revisor do seu próprio código através de Pull Requests (PRs).

1. Crie a branch da entidade:
   ```bash
   git checkout -b feature/schema-[ENTIDADE]
   ```
2. Escreva o código no arquivo correspondente (ex: `[ARQUIVO_ENTIDADE]`).
3. Adicione e commite:
   ```bash
   git add .
   git commit -m "feat: criar schema de [ENTIDADE]"
   ```
4. Suba a branch para o GitHub:
   ```bash
   git push origin feature/schema-[ENTIDADE]
   ```
5. No GitHub, abra um **Pull Request** dessa branch para a `main`.
6. Revise as alterações e clique em **Merge pull request**.
7. Volte ao terminal, retorne para a `main`, atualize o código e inicie a próxima feature:
   ```bash
   git checkout main
   git pull
   ```

---

## 5. O Recibo via Terminal

O Git possui um comando nativo que desenha a árvore de commits, mostrando exatamente onde as branches nasceram e onde foram mergeadas.

**Ação do aluno:** ao final da aula, antes de submeter a tarefa, rode no terminal:

```bash
git log --graph --oneline --all > recibo-aula.txt
```

**Exemplo de Recibo Visual (Terminal):**

```
* e3b1a2c (HEAD -> main, origin/main) Merge pull request #3 from feature/schema-[ENTIDADE_3]
|\
| * 7f4d2a1 (origin/feature/schema-[ENTIDADE_3]) feat: criar entidade e relacionamentos em [ARQUIVO_ENTIDADE_3]
|/
* c8a9f4d Merge pull request #2 from feature/schema-[ENTIDADE_2]
|\
| * b5c6e8a (origin/feature/schema-[ENTIDADE_2]) feat: criar schema isolado em [ARQUIVO_ENTIDADE_2]
|/
* a1b2c3d Merge pull request #1 from feature/schema-[ENTIDADE_1]
|\
| * f9e8d7c (origin/feature/schema-[ENTIDADE_1]) feat: configurar tabela em [ARQUIVO_ENTIDADE_1]
|/
* 1a2b3c4 init: configurar [FRAMEWORK_BACKEND], [FERRAMENTA_ORM] e conexao com [SERVICO_BANCO]
```
