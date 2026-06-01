// dados do site em formato JSON
const dados = {
  "artistas": [
    {
      "id": 1,
      "nome": "Michael Jackson",
      "descricao": "O Rei do Pop, um dos artistas mais vendidos da história da música.",
      "conteudo": "Michael Jackson revolucionou a indústria musical com sua dança, voz e produção. Seus álbuns como Thriller e Bad quebram recordes até hoje. Pioneiro no uso de videoclipes como forma de arte.",
      "genero": "Pop / R&B",
      "pais": "Estados Unidos",
      "anoAtividade": "1964 – 2009",
      "destaque": true,
      "imagemPrincipal": "imagens/michael.jpg"
    },
    {
      "id": 2,
      "nome": "Beyoncé",
      "descricao": "Rainha do Pop R&B, ícone cultural e uma das artistas mais premiadas.",
      "conteudo": "Beyoncé começou no Destiny's Child e se tornou uma das maiores solo da história. Com álbuns como Lemonade e Renaissance, ela redefiniu o que significa ser uma artista completa.",
      "genero": "Pop / R&B / Soul",
      "pais": "Estados Unidos",
      "anoAtividade": "1997 – presente",
      "destaque": true,
      "imagemPrincipal": "imagens/beyonce.jpg"
    },
    {
      "id": 3,
      "nome": "The Beatles",
      "descricao": "A banda mais influente da história do rock e da música popular.",
      "conteudo": "John, Paul, George e Ringo mudaram a música para sempre. De Love Me Do a Abbey Road, a evolução musical dos Beatles em apenas uma década é única na história.",
      "genero": "Rock / Pop",
      "pais": "Reino Unido",
      "anoAtividade": "1960 – 1970",
      "destaque": true,
      "imagemPrincipal": "imagens/beatles.jpg"
    },
    {
      "id": 4,
      "nome": "Freddie Mercury",
      "descricao": "Vocalista do Queen, considerado um dos maiores cantores de todos os tempos.",
      "conteudo": "Freddie Mercury tinha uma voz de quatro oitavas e presença de palco inigualável. Com o Queen, criou hinos como Bohemian Rhapsody e We Will Rock You que transcendem gerações.",
      "genero": "Rock / Arena Rock",
      "pais": "Reino Unido",
      "anoAtividade": "1969 – 1991",
      "destaque": false,
      "imagemPrincipal": "imagens/freddie.png"
    },
    {
      "id": 5,
      "nome": "Billie Eilish",
      "descricao": "Fenômeno da geração Z, vencedora de múltiplos Grammys ainda jovem.",
      "conteudo": "Billie Eilish surgiu aos 14 anos com Ocean Eyes e em 2020 se tornou a pessoa mais jovem a ganhar os 4 principais prêmios do Grammy na mesma noite. Seu estilo dark-pop é único.",
      "genero": "Pop / Indie / Dark Pop",
      "pais": "Estados Unidos",
      "anoAtividade": "2015 – presente",
      "destaque": false,
      "imagemPrincipal": "imagens/billie.jpg"
    },
    {
      "id": 6,
      "nome": "Bob Marley",
      "descricao": "Rei do reggae e símbolo de paz, amor e resistência cultural.",
      "conteudo": "Bob Marley levou o reggae jamaicano para o mundo inteiro. Suas músicas carregam mensagens de paz, espiritualidade e luta social. É um dos artistas mais ouvidos mesmo décadas após sua morte.",
      "genero": "Reggae",
      "pais": "Jamaica",
      "anoAtividade": "1963 – 1981",
      "destaque": false,
      "imagemPrincipal": "imagens/bob.jpg"
    }
  ],

  "musicas": [
    { "id": 1, "artistaId": 1, "nome": "Thriller", "descricao": "Faixa título do álbum mais vendido da história.", "imagem": "imagens/michael-jackson.jpg" },
    { "id": 2, "artistaId": 1, "nome": "Billie Jean", "descricao": "Clássico com a icônica linha de baixo e o moonwalk.", "imagem": "imagens/michael-jackson.jpg" },
    { "id": 3, "artistaId": 1, "nome": "Beat It", "descricao": "Rock-pop com solo de Eddie Van Halen.", "imagem": "imagens/michael-jackson.jpg" },

    { "id": 4, "artistaId": 2, "nome": "Crazy in Love", "descricao": "Hit que marcou o início da carreira solo de Beyoncé.", "imagem": "" },
    { "id": 5, "artistaId": 2, "nome": "Halo", "descricao": "Balada poderosa que demonstra toda sua extensão vocal.", "imagem": "" },
    { "id": 6, "artistaId": 2, "nome": "Formation", "descricao": "Hino de empoderamento e identidade negra.", "imagem": "" },

    { "id": 7, "artistaId": 3, "nome": "Let It Be", "descricao": "Uma das baladas mais famosas da história da música.", "imagem": "imagens/the-beatles.jpg" },
    { "id": 8, "artistaId": 3, "nome": "Hey Jude", "descricao": "Single com um dos finais mais épicos do rock.", "imagem": "imagens/the-beatles.jpg" },
    { "id": 9, "artistaId": 3, "nome": "Come Together", "descricao": "Abertura do Abbey Road, groove inconfundível.", "imagem": "imagens/the-beatles.jpg" },

    { "id": 10, "artistaId": 4, "nome": "Bohemian Rhapsody", "descricao": "A ópera rock mais famosa de todos os tempos.", "imagem": "imagens/freddie-mercury.jpg" },
    { "id": 11, "artistaId": 4, "nome": "We Will Rock You", "descricao": "Hino esportivo e cultural de geração em geração.", "imagem": "imagens/freddie-mercury.jpg" },
    { "id": 12, "artistaId": 4, "nome": "Don't Stop Me Now", "descricao": "Uma das músicas mais alegres e energéticas do rock.", "imagem": "imagens/freddie-mercury.jpg" },
    
    { "id": 13, "artistaId": 5, "nome": "Bad Guy", "descricao": "Hit que levou Billie ao topo das paradas mundiais.", "imagem": "imagens/billie-eilish.jpg" },
    { "id": 14, "artistaId": 5, "nome": "Ocean Eyes", "descricao": "A música que revelou Billie para o mundo.", "imagem": "imagens/billie-eilish.jpg" },
    { "id": 15, "artistaId": 5, "nome": "Happier Than Ever", "descricao": "Faixa título do segundo álbum aclamado pela crítica.", "imagem": "imagens/billie-eilish.jpg" },
    { "id": 16, "artistaId": 6, "nome": "No Woman No Cry", "descricao": "Clássico do reggae com mensagem de esperança.", "imagem": "imagens/bob-marley.jpg" },
    { "id": 17, "artistaId": 6, "nome": "Redemption Song", "descricao": "Hino acústico sobre liberdade e resistência.", "imagem": "imagens/bob-marley.jpg" },
    { "id": 18, "artistaId": 6, "nome": "One Love", "descricao": "O símbolo musical da Jamaica e da paz mundial.", "imagem": "imagens/bob-marley.jpg" }
  ]
};

function carregarIndex() {
  if (!document.getElementById('carrossel-inner')) return;

  const destaques = dados.artistas.filter((a) => a.destaque);

  const inner = document.getElementById('carrossel-inner');
  const indicators = document.getElementById('carrossel-indicators');

  destaques.forEach((artista, i) => {
    const ativo = i === 0 ? 'active' : '';

    indicators.innerHTML += `
      <button
        type="button"
        data-bs-target="#carrosselPrincipal"
        data-bs-slide-to="${i}"
        ${i === 0 ? 'class="active"' : ''}
      ></button>
    `;

    inner.innerHTML += `
      <div class="carousel-item ${ativo}">
        <img src="${artista.imagemPrincipal}" class="d-block w-100 carrossel-img" alt="${artista.nome}">
        <div class="carousel-caption">
          <h2>${artista.nome}</h2>
          <p>${artista.descricao}</p>
          <a href="detalhes.html?id=${artista.id}" class="btn-ver-mais">Ver músicas</a>
        </div>
      </div>
    `;
  });

  const grid = document.getElementById('grid-artistas');

  dados.artistas.forEach((a) => {
    const card = `
      <div class="col-12 col-sm-6 col-md-4">
        <div class="card" onclick="window.location='detalhes.html?id=${a.id}'">
          <img src="${a.imagemPrincipal}" alt="${a.nome}">
          <div class="card-body">
            <span class="tag-genero">${a.genero}</span>
            <h5>${a.nome}</h5>
            <p>${a.descricao}</p>
            <a href="detalhes.html?id=${a.id}" class="link-card">Ver músicas →</a>
          </div>
        </div>
      </div>
    `;

    grid.innerHTML += card;
  });
}

function carregarDetalhes() {
  if (!document.getElementById('info-artista')) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));

  const artista = dados.artistas.find((a) => a.id === id);

  if (!artista) {
    document.getElementById('info-artista').innerHTML = '<p>Artista não encontrado.</p>';
    return;
  }

  document.title = `${artista.nome} | SoundWiki`;

  document.getElementById('info-artista').innerHTML = `
    <div class="row g-4">
      <div class="col-12 col-md-4">
        <img src="${artista.imagemPrincipal}" class="foto-artista" alt="${artista.nome}">
      </div>
      <div class="col-12 col-md-8">
        <span class="tag-genero">${artista.genero}</span>
        <h1 class="nome-artista">${artista.nome}</h1>
        <p class="bio-artista">${artista.conteudo}</p>
        <ul class="info-lista">
          <li><span>🌍 País:</span> ${artista.pais}</li>
          <li><span>🎵 Gênero:</span> ${artista.genero}</li>
          <li><span>📅 Ativo:</span> ${artista.anoAtividade}</li>
        </ul>
      </div>
    </div>
  `;

  const grid = document.getElementById('grid-musicas');

  dados.musicas
    .filter((m) => m.artistaId === id)
    .forEach((m) => {
      const card = `
        <div class="col-6 col-md-4">
          <div class="card-musica">
            <img src="${m.imagem}" alt="${m.nome}">
            <div class="info">
              <h6>${m.nome}</h6>
              <p>${m.descricao}</p>
            </div>
          </div>
        </div>
      `;

      grid.innerHTML += card;
    });
}

carregarIndex();
carregarDetalhes();