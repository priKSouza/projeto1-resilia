function questao3() {
    var resposta = prompt(
      ""
    );
    if (resposta == "sim") {
      document.write(
        `<div><p>✓ </p>
            <button onclick="window.location.href='./../Html/jogador2fase3.html'">Continue</button></div>`
      );
    } else {
      window.location.href='./../Html/gameover.html';
    }
  }
  
  questao3();