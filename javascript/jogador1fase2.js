var contador = 3;

function questao2() {
  while (contador >= 0) {
    var resposta = prompt("Digite sim ou não.");
    if (resposta == "sim") {
      alert(
        "✓ Boa! Descansar e fazer o que gosta também faz parte do processo."
      );
      location.href = "./../Html/jogador1fase3.html";
    } else {
      alert(
        "☹ Estudar é fundamental, mas o descanso também precisa acontecer."
      );
      contador--;
      location.href = "./../Html/jogador1fase2.html";
      if (contador <= 0) {
        location.href = "./../Html/gameover.html";
      }
    }
  }
}
