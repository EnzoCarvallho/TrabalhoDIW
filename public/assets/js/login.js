const API = 'http://localhost:3000';

function alternarForm() {
  document.getElementById('form-login').classList.toggle('d-none');
  document.getElementById('form-cadastro').classList.toggle('d-none');
}

async function fazerLogin() {
  const login = document.getElementById('login-usuario').value.trim();
  const senha = document.getElementById('login-senha').value.trim();
  const msg = document.getElementById('msg-login');

  const res = await fetch(`${API}/usuarios?login=${login}`);
  const usuarios = await res.json();

  if (usuarios.length === 0 || usuarios[0].senha !== senha) {
    msg.className = 'mensagem-alerta alert alert-danger';
    msg.textContent = 'Login ou senha incorretos.';
    return;
  }

  sessionStorage.setItem('usuarioLogado', JSON.stringify(usuarios[0]));
  window.location.href = 'index.html';
}

async function fazerCadastro() {
  const nome = document.getElementById('cad-nome').value.trim();
  const login = document.getElementById('cad-login').value.trim();
  const email = document.getElementById('cad-email').value.trim();
  const senha = document.getElementById('cad-senha').value.trim();
  const msg = document.getElementById('msg-cadastro');

  if (!nome || !login || !email || !senha) {
    msg.className = 'mensagem-alerta alert alert-warning';
    msg.textContent = 'Preencha todos os campos.';
    return;
  }

  const check = await fetch(`${API}/usuarios?login=${login}`);
  const existe = await check.json();
  if (existe.length > 0) {
    msg.className = 'mensagem-alerta alert alert-danger';
    msg.textContent = 'Esse login já está em uso.';
    return;
  }

  const novoUsuario = { nome, login, email, senha, admin: false };
  await fetch(`${API}/usuarios`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(novoUsuario)
  });

  msg.className = 'mensagem-alerta alert alert-success';
  msg.textContent = 'Conta criada! Faça login.';
  setTimeout(alternarForm, 1500);
}