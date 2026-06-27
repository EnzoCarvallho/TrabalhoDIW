const API = 'http://localhost:3000';

async function carregarFavoritos() {
  const usuario = JSON.parse(sessionStorage.getItem('usuarioLogado'));
  const grid = document.getElementById('grid-favoritos');

  if (!usuario) {
    grid.innerHTML = '<p>Você precisa estar logado para ver seus favoritos. <a href="login.html">Entrar</a></p>';
    return;
  }

  const resFav = await fetch(`${API}/favoritos`);
  const todos = await resFav.json();
  const favoritos = todos.filter(f => f.usuarioId == usuario.id);

  if (favoritos.length === 0) {
    grid.innerHTML = '<p class="texto-vazio">Você ainda não favoritou nenhum artista. <a href="index.html">Explorar artistas</a></p>';
    return;
  }

  for (const fav of favoritos) {
    const resArtista = await fetch(`${API}/artistas/${fav.artistaId}`);
    const artista = await resArtista.json();

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
          <button class="botao-favorito" onclick="removerFavorito('${fav.id}', this)">❤️</button>
        </div>
      </div>
    `;
  }
}

async function removerFavorito(favId, botao) {
  await fetch(`${API}/favoritos/${favId}`, { method: 'DELETE' });
  botao.closest('.col-6').remove();

  const grid = document.getElementById('grid-favoritos');
  if (grid.children.length === 0) {
    grid.innerHTML = '<p class="texto-vazio">Você ainda não favoritou nenhum artista. <a href="index.html">Explorar artistas</a></p>';
  }
}

carregarFavoritos();