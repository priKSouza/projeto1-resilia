var contador = 3;

function questao2() {
  while (contador >= 0) {
    var resposta = prompt("Digite aqui sua resposta, não precisa por o <>.");
    if (resposta == "footer") {
      alert(
        "✓ A página do Alexandre vai ficar incrível. Vamos para próxima fase?"
      );
      location.href = "./../Html/jogador3fase3.html";
    } else {
      alert(`☹ Você esqueceu? Vou te dar outra chance, capricha! Você ainda tem ${contador} tentativas.`);
      contador--;
      location.href = "./../Html/jogador3fase2.html";
      if (contador <= 0) {
        location.href = "./../Html/gameover.html";
      }
    }
  }
}
