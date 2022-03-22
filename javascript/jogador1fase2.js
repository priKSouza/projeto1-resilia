function questao2() {
  var resposta = prompt("Digite sim ou não.");
  if (resposta == "sim") {
    alert("✓ Boa! Descansar e fazer o que gosta também faz parte do processo.");
    location.href = "./../Html/jogador1fase3.html";
  } else {
    alert("☹ Estudar é fundamental, mas o descanso também precisa acontecer.");
    location.href = "./../Html/jogador1fase2.html";
  }
}
