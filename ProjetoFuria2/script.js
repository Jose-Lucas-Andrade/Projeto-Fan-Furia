const form = document.getElementById('fanForm');
const perfilDiv = document.getElementById('perfil');

function renderizarPerfil(data) {
  const { nome, idade, cidade, jogador, rede, envolvimento } = data;

  const tipoFã = {
    casual: "Fã Curioso 🐾",
    moderado: "Fã Engajado 🔥",
    hardcore: "Pantera Raiz 🐯"
  }[envolvimento] || "Fã da FURIA";

  const perfil = `
    <h2>Olá, ${nome}! 🖤</h2>
    <p>Você tem ${idade} anos e mora em ${cidade}.</p>
    <p>Seu jogador favorito é <strong>${jogador}</strong> e você acompanha a FURIA pelo <strong>${rede}</strong>.</p>
    <p>Você é classificado como: <strong>${tipoFã}</strong>.</p>
    <p>Recomendações para você:</p>
    <ul>
      <li>🎥 Assista aos highlights do ${jogador} no nosso canal do YouTube!</li>
      <li>🛒 Confira itens exclusivos na loja da FURIA para fãs ${envolvimento}!</li>
      <li>📊 Participe do nosso Quiz semanal via ${rede}.</li>
    </ul>
  `;

  perfilDiv.innerHTML = perfil;
  perfilDiv.classList.remove('hidden');
  form.classList.add('hidden');
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('loading').classList.remove('hidden');

  const data = new FormData(form);
  const perfilData = {
    nome: data.get('nome'),
    idade: data.get('idade'),
    cidade: data.get('cidade'),
    jogador: data.get('jogador'),
    rede: data.get('rede'),
    envolvimento: data.get('envolvimento')
  };

  setTimeout(() => {
    localStorage.setItem('perfilFuria', JSON.stringify(perfilData));
    document.getElementById('loading').classList.add('hidden');
    renderizarPerfil(perfilData);
  }, 1500);
});

// Verifica se já há um perfil salvo
const perfilSalvo = localStorage.getItem('perfilFuria');
if (perfilSalvo) {
  renderizarPerfil(JSON.parse(perfilSalvo));
}
