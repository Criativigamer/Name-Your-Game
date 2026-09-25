protótipo do layout: https://www.figma.com/design/6H31ogoT3Vpe0mFjWrF9eD/Name-Your-Game?node-id=0-1&p=f&t=4gkCgLcifhEkIsoI-0
protótipo schema: https://www.drawdb.app/editor/diagrams/6b574023-b903-41e2-a80f-aa37590699dd

# Documentação do Projeto — RPG de Turno Browser

---

## Requisitos Funcionais

| ID     | Descrição                                                              | Entidades Envolvidas         |
|--------|------------------------------------------------------------------------|------------------------------|
| RF001  | Upload de imagens e texto para cada skill e personagem por conta       | Conta, Personagem, Skill     |
| RF002  | Imagens e nomes aparecem nos espaços antes vazios                      | Personagem, Inimigo, Skill   |
| RF003  | Tipo de inimigo repetido reutiliza imagens e texto já subidos          | Inimigo                      |
| RF004  | IA controla o uso de skills pelos inimigos                             | Inimigo, Skill               |
| RF005  | Sistema de contas — uploads não se compartilham entre contas           | Conta                        |
| RF006  | Ordem de turno entre personagem e inimigos                             | Run, Personagem, Inimigo     |
| RF007  | Sistema de runs — permite resetar uploads ao estado padrão             | Run, Conta                   |

---

## Requisitos Não Funcionais

| ID      | Categoria | Descrição                                                        |
|---------|-----------|------------------------------------------------------------------|
| RNF001  | Software  | Ambiente Node.js com framework Express e ORM Drizzle             |
| RNF002  | —         | A definir                                                        |

---

## Casos de Uso

| ID    | Nome                  | Ator    | Descrição resumida                                          | Requisitos Relacionados |
|-------|-----------------------|---------|-------------------------------------------------------------|-------------------------|
| UC001 | Criar conta           | Jogador | Jogador se cadastra com nome e senha                        | RF005                   |
| UC002 | Fazer login           | Jogador | Jogador acessa sua conta existente                          | RF005                   |
| UC003 | Upload de novo inimigo| Jogador | Jogador envia nome e imagem para um tipo de inimigo         | RF001, RF002, RF003     |
| UC004 | Começar uma run       | Jogador | Jogador inicia uma nova run do zero                         | RF007                   |
| UC005 | Continuar uma run     | Jogador | Jogador retoma uma run já existente                         | RF006, RF007            |
| UC006 | Resetar uma run       | Jogador | Jogador apaga os uploads e volta ao estado padrão da run    | RF007                   |

---

## Entidades

### 1. Conta
| Variável  | Tipo     | Descrição           |
|-----------|----------|---------------------|
| id        | int      | identificador único |
| nome      | string   | nome de usuário     |
| email     | srting   | e-mail do usuario   |
| senha     | string   | senha (hash)        |

---

### 2. Run
| Variável   | Tipo     | Descrição                              |
|------------|----------|----------------------------------------|
| id         | int      | identificador único                    |
| contaId    | int      | FK → Conta                             |
| status     | enum     | status: `ativa`, `pausada`, `resetada` |
| iniciadaEm | date     | data de início                         |
| turnoAtual | int      | controle de ordem de turno             |

---

### 3. Personagem
| Variável   | Tipo   | Descrição                                                |
|------------|--------|----------------------------------------------------------|
| id         | int    | identificador único                                      |
| run_id     | int    | FK → Run                                                 |
| nome       | string | nome dado pelo jogador                                   |
| img_idle   | string | caminho/URL da imagem idle uploaded                      |
| img_act    | string | caminho/URL da imagem act uploaded (default to img_idle) |
| img_down   | string | caminho/URL da imagem down uploaded (default to img_idle)|
| hp         | int    | pontos de vida                                           |
| mp         | int    | pontos de mana                                           |

---

### 4. Inimigo
| Variável   | Tipo   | Descrição                                               |
|------------|--------|---------------------------------------------------------|
| id         | int    | identificador único                                     |
| run_id     | int    | FK → Run                                                |
| nome       | string | nome dado pelo jogador                                  |
| img_idle   | string | caminho/URL da imagem idle uploaded                     |
| img_act    | string | caminho/URL da imagem act uploaded (default to img_idle)|
| tipo       | string | tipo do inimigo (reutilização de assets)                |

---

### 5. Skill
| Variável   | Tipo   | Descrição                       |
|------------|--------|---------------------------------|
| id         | int    | identificador único             |
| nome       | string | nome da skill                   |
| img        | string | caminho/URL da imagem uploaded  |
| dmg        | int    | valor de dano causado           |
| cost       | int    | valor do custo de mana da skill |
| descricao  | string | descrição do efeito             |
| dono_id    | int    | FK → Personagem ou Inimigo      |
| dono_side  | enum   | side: `personagem`, `inimigo`   |

---

## Relações

```
Conta
 └── Run (1:N)
      ├── Personagem (1:3 por Run)
      │    └── Skill (1:N)
      ├── Inimigo (1:N, agrupados por tipo)
           └── Skill (1:N)
 
```