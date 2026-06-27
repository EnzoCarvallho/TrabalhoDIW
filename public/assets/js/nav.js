function carregarMenu() {
  const usuario = JSON.parse(sessionStorage.getItem('usuarioLogado'));
  const listaMenu = document.getElementById('lista-menu');

  if (!listaMenu) return;

  let itensMenu = `
    <li class="nav-item"><a class="nav-link" href="index.html">Início</a></li>
    <li class="nav-item"><a class="nav-link" href="index.html#artistas">Artistas</a></li>
    <li class="nav-item"><a class="nav-link" href="estatisticas.html">Estatísticas</a></li>
  `;

  if (usuario) {
    if (usuario.admin) {
      itensMenu += `<li class="nav-item"><a class="nav-link" href="cadastro_artistas.html">Cadastro de Artistas</a></li>`;
    }
    itensMenu += `
      <li class="nav-item"><a class="nav-link" href="favoritos.html"> Favoritos</a></li>
      <li class="nav-item"><a class="nav-link link-sair" href="#" onclick="fazerLogout()">Sair (${usuario.nome.split(' ')[0]})</a></li>
    `;
  } else {
    itensMenu += `<li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>`;
  }

  listaMenu.innerHTML = itensMenu;
}

function fazerLogout() {
  sessionStorage.removeItem('usuarioLogado');
  window.location.href = 'index.html';
}

carregarMenu();