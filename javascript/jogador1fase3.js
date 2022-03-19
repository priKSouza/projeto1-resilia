function questao3() {
  var resposta = prompt(
    "Ana finalizou o curso e precisa fazer uma postagem no LinkedIn. Ela usa o método Golden Circle pra se destacar (sim) ou faz uma postagem de qualquer jeito (não)?"
  );
  if (resposta == "sim") {
    document.write(
      `<div><p>✓ Isso!! Você ajudou a Ana a ser uma Resiliente de sucesso. Ela está pronta para garantir uma vaga no mercado de trabalho.</p>
          <button onclick="window.location.href='./../Html/jogador1fase3.html'">Continue</button></div>`
    );
  } else {
    window.location.href='./../Html/gameover.html';
  }
}

questao3();
