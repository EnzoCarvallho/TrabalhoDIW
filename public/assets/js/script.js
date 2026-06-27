const API = 'http://localhost:3000';

async function carregarIndex() {
  if (!document.getElementById('carrossel-inner')) return;

  const response = await fetch(`${API}/artistas`);
  const artistas = await response.json();

  const destaques = artistas.filter((a) => a.destaque);
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

  await carregarCards(artistas);
}

async function carregarCards(artistas) {
  const usuario = JSON.parse(sessionStorage.getItem('usuarioLogado'));
  const grid = document.getElementById('grid-artistas');

  let favoritos = [];
  if (usuario) {
    const resFav = await fetch(`${API}/favoritos`);
    const todos = await resFav.json();
    favoritos = todos.filter(f => f.usuarioId == usuario.id);
  }

  grid.innerHTML = '';

  artistas.forEach((artista) => {
    const jaFavoritado = favoritos.some(f => f.artistaId == artista.id);
    const iconeCoracao = jaFavoritado ? '❤️' : '🤍';

    const botaoFavorito = usuario
      ? `<button class="botao-favorito" onclick="alternarFavorito(${artista.id}, this)">${iconeCoracao}</button>`
      : '';

    grid.innerHTML += `
      <div class="col-6 col-md-4">
        <div class="card-artista-container">
          <a href="detalhes.html?id=${artista.id}" class="card-artista">
            <img src="${artista.imagemPrincipal}" alt="${artista.nome}">
            <div class="info">
              <h6>${artista.nome}</h6>
              <p>${artista.genero}</p>
            </div>
          </a>
          ${botaoFavorito}
        </div>
      </div>
    `;
  });
}

async function alternarFavorito(artistaId, botao) {
  const usuario = JSON.parse(sessionStorage.getItem('usuarioLogado'));
  if (!usuario) {
    window.location.href = 'login.html';
    return;
  }

  const resFav = await fetch(`${API}/favoritos`);
  const todos = await resFav.json();
  const favoritos = todos.filter(f => f.usuarioId == usuario.id && f.artistaId == artistaId);

  if (favoritos.length > 0) {
    await fetch(`${API}/favoritos/${favoritos[0].id}`, { method: 'DELETE' });
    botao.textContent = '🤍';
  } else {
    await fetch(`${API}/favoritos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usuarioId: usuario.id, artistaId: artistaId })
    });
    botao.textContent = '❤️';
  }
}

async function carregarDetalhes() {
  if (!document.getElementById('info-artista')) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));

  if (!id) {
    document.getElementById('info-artista').innerHTML = '<p>Artista não encontrado.</p>';
    return;
  }

  const responseArtista = await fetch(`${API}/artistas/${id}`);

  if (!responseArtista.ok) {
    document.getElementById('info-artista').innerHTML = '<p>Artista não encontrado.</p>';
    return;
  }

  const artista = await responseArtista.json();
  document.title = `${artista.nome} | SoundWave`;

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

  const responseMusicas = await fetch(`${API}/musicas?artistaId=${id}`);
  const musicas = await responseMusicas.json();
  const grid = document.getElementById('grid-musicas');

  musicas.forEach((m) => {
    grid.innerHTML += `
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
  });
}

carregarIndex();
carregarDetalhes();