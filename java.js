function mudarMensagem() {
    const men = document.getElementById('mensagem');
    const botao = document.getElementById('botao');
    const subtitulo = document.getElementById('subtitulo');


    men.innerHTML = "Você acabou de GANHAR 5% de descontos em todos os produtos do site!<br>Aproveite";
    botao.innerText = "Desconto aplicado!";
    subtitulo.innerHTML = "🎉 Parabéns! Você desbloqueou uma oferta exclusiva!";
}

document.getElementById('botao').onclick = mudarMensagem;