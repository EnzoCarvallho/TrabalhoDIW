# SoundWave

## Aluno

Nome: Enzo Maciel

Matrícula: 911688

---

## Sobre o projeto

O SoundWave é um site sobre artistas musicais. O usuário pode visualizar os artistas cadastrados, acessar uma página com mais informações e ver algumas músicas relacionadas a cada artista.

O projeto foi desenvolvido utilizando HTML, CSS, JavaScript, Bootstrap e JSON Server.

---

## Estrutura do banco de dados

O arquivo `db.json` possui 3 coleções:

### artistas

Guarda as informações dos artistas.

Exemplos de dados:

- id
- nome
- descrição
- gênero
- país
- imagem
- destaque

### musicas

Guarda as músicas de cada artista.

Exemplos de dados:

- id
- artistaId
- nome
- descrição
- imagem

### categorias

Guarda os gêneros musicais utilizados no projeto.

Exemplos:

- Pop
- Hip-Hop
- Rap
- R&B
- Trap

---

## Exemplo de artista

```json
{
  "id": 1,
  "nome": "Michael Jackson",
  "genero": "Pop / R&B",
  "pais": "Estados Unidos",
  "destaque": true
}
```

---

## Funcionalidades

- Listagem de artistas na página inicial
- Carrossel com artistas em destaque
- Página de detalhes para cada artista
- Exibição das músicas relacionadas ao artista
- Busca dos dados através do JSON Server
- Uso de URLSearchParams para obter o id da URL

---

## Como executar

Instalar as dependências:

```bash
npm install
```

Executar o JSON Server:

```bash
node ./node_modules/json-server/lib/cli/bin.js --watch ./db/db.json --static ./public
```

Abrir no navegador:

```text
http://localhost:3000
```

---

## Imagens

### Página Inicial

Adicionar print da Home.

<img width="1919" height="945" alt="image" src="https://github.com/user-attachments/assets/c4a6d91a-de7a-4fd0-9e8a-42147631b6d0" />
<img width="1911" height="944" alt="image" src="https://github.com/user-attachments/assets/37ac8b94-fa01-4844-86f6-9ff440eea4f4" />
<img width="1919" height="767" alt="image" src="https://github.com/user-attachments/assets/428bc03c-c245-47fe-9d88-003a294ca7d4" />

### Página de Detalhes

Adicionar print da página de detalhes.

<img width="1907" height="915" alt="image" src="https://github.com/user-attachments/assets/9bf1e900-7a37-4944-af30-9cdf3ad8104e" />


---

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- Bootstrap
- JSON Server
- Fetch API

---

Trabalho desenvolvido para a disciplina de Desenvolvimento de Interfaces Web.
