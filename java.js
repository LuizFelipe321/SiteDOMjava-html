function mudarMensagem() {
    const men = document.getElementById('h1');
    const botao = document.getElementById('botao');
    const subtitulo = document.getElementById('subtitulo');

    men.innerHTML = "Você acabou de GANHAR 5% de descontos em todos os produtos do site!<br>Aproveite";
    botao.innerText = "Desconto aplicado!";
    subtitulo.innerHTML = "🎉 Parabéns! Você desbloqueou uma oferta exclusiva!";
}

const nomesCadastrados = [];

function atualizarLista() {
    const lista = document.getElementById("listaNomes");
    lista.innerHTML = "";
    nomesCadastrados.forEach(nome => {
        const option = document.createElement("option");
        option.value = nome;
        lista.appendChild(option);
    });
}

function cadastrar() {
    const nome = document.getElementById("nome").value.trim();
    const msg = document.getElementById("box_login");

    if (nome === "") {
        msg.textContent = "Digite um nome para cadastrar.";
        return;
    }

    if (!nomesCadastrados.includes(nome)) {
        nomesCadastrados.push(nome);
        atualizarLista();
        msg.textContent = `Cadastro realizado para: ${nome}`;
    } else {
        msg.textContent = `O nome ${nome} já está cadastrado.`;
    }
}

function verificar() {
    const nome = document.getElementById("nome").value.trim();
    const msg = document.getElementById("box_login");

    if (nomesCadastrados.includes(nome)) {
        msg.textContent = `Oi, ${nome}!`;
    } else {
        msg.textContent = "Ops, parece que você não possui cadastro no momento.";
    }
}

document.getElementById('subtitulo').onclick = mudarMensagem;

