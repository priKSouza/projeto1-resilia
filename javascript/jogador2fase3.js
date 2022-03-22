function questao3() {
  var resposta = prompt("Digite sua resposta aqui");
  if (resposta == "git push") {
    alert("✓ Boa Resiliente! Você sabe como mandar seu projeto para o GitHub.");
    location.href = "./../Html/fimdejogo.html";
  } else {
    alert("Você vacilou! Recomece o jogo.");
    location.href = "./../Html/gameover.html";
  }
}
