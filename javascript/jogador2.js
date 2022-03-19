function questao1() {
    var resposta = prompt(
      "Patrick já entregou seu exercício e um colega precisa de ajuda. Ele ajuda o colega com o que sabe (sim) ou (não)?"
    );
    if (resposta == "sim") {
      document.write(
        `<div><p>✓ Você aprender mais quando compartilha o que sabe. Caminho certo pra se tornar um Resiliente!</p>
        <button onclick="window.location.href='./../Html/jogador2fase2.html'">Continue</button></div>`
      );
    } else {
      document.write(`<div><p>☹ Ter empatia é primordial para garantir um bom relacionamento em sua equipe.</p>
      <button onclick="window.location.href='./../Html/jogador2.html'">Tente de novo</button></div>`);
    }
  }
  
  questao1();