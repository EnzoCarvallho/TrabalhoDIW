const API = 'http://localhost:3000';

// Bloqueia acesso se não for admin
const usuario = JSON.parse(sessionStorage.getItem('usuarioLogado'));
if (!usuario || !usuario.admin) {
  window.location.href = 'index.html';
}

async function carregarTabela() {
  const res = await fetch(`${API}/artistas`);
  const artistas = await res.json();
  const corpo = document.getElementById('tabela-corpo');

  corpo.innerHTML = '';

  artistas.forEach((artista) => {
    corpo.innerHTML += `
      <tr>
        <td>${artista.nome}</td>
        <td>${artista.genero || '-'}</td>
        <td>${artista.pais || '-'}</td>
        <td>${artista.destaque ? '⭐ Sim' : 'Não'}</td>
        <td class="acoes-tabela">
          <button class="botao-editar" onclick="editarArtista(${artista.id})">Editar</button>
          <button class="botao-excluir" onclick="excluirArtista(${artista.id})">Excluir</button>
        </td>
      </tr>
    `;
  });
}

async function salvarArtista() {
  const id = document.getElementById('artista-id').value;
  const dados = {
    nome: document.getElementById('artista-nome').value.trim(),
    genero: document.getElementById('artista-genero').value.trim(),
    pais: document.getElementById('artista-pais').value.trim(),
    anoAtividade: document.getElementById('artista-ano').value.trim(),
    descricao: document.getElementById('artista-descricao').value.trim(),
    conteudo: document.getElementById('artista-conteudo').value.trim(),
    imagemPrincipal: document.getElementById('artista-imagem').value.trim(),
    destaque: document.getElementById('artista-destaque').checked
  };

  if (!dados.nome) {
    alert('O nome do artista é obrigatório.');
    return;
  }

  if (id) {
    await fetch(`${API}/artistas/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    });
  } else {
    await fetch(`${API}/artistas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    });
  }

  limparFormulario();
  carregarTabela();
}

async function editarArtista(id) {
  const res = await fetch(`${API}/artistas/${id}`);
  const artista = await res.json();

  document.getElementById('artista-id').value = artista.id;
  document.getElementById('artista-nome').value = artista.nome;
  document.getElementById('artista-genero').value = artista.genero || '';
  document.getElementById('artista-pais').value = artista.pais || '';
  document.getElementById('artista-ano').value = artista.anoAtividade || '';
  document.getElementById('artista-descricao').value = artista.descricao || '';
  document.getElementById('artista-conteudo').value = artista.conteudo || '';
  document.getElementById('artista-imagem').value = artista.imagemPrincipal || '';
  document.getElementById('artista-destaque').checked = artista.destaque || false;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function excluirArtista(id) {
  if (!confirm('Tem certeza que deseja excluir este artista?')) return;
  await fetch(`${API}/artistas/${id}`, { method: 'DELETE' });
  carregarTabela();
}

function limparFormulario() {
  document.getElementById('artista-id').value = '';
  document.getElementById('artista-nome').value = '';
  document.getElementById('artista-genero').value = '';
  document.getElementById('artista-pais').value = '';
  document.getElementById('artista-ano').value = '';
  document.getElementById('artista-descricao').value = '';
  document.getElementById('artista-conteudo').value = '';
  document.getElementById('artista-imagem').value = '';
  document.getElementById('artista-destaque').checked = false;
}

carregarTabela();