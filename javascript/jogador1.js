var contador = 3;

function questao1() {
  while (contador >= 0) {
    var resposta = prompt("Digite sim ou não.");
    if (resposta == "sim") {
      alert("✓ Yes!!! Assim você vai ajudar a Ana a chegar no objetivo.");
      location.href = "./../Html/jogador1fase2.html";
    } else {
      alert(
        `☹ Ah não!! Assim a Ana não vai chegar muito longe! Você ainda tem ${contador} tentativas.`
      );
      contador--;
      location.href = "./../Html/jogador1.html";
      if (contador <= 0) {
        location.href = "./../Html/gameover.html";
      }
    }
  }
}
