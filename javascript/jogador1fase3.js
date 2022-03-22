function questao3() {
  var resposta = prompt("Digite sim ou não.");
  if (resposta == "sim") {
    document.write(
      "✓ Isso!! Você ajudou a Ana a ser uma Resiliente de sucesso. Ela está pronta para garantir uma vaga no mercado de trabalho."
    );
    location.href = "./../Html/fimdejogo.html";
  } else {
    alert("Você vacilou! Recomece o jogo.");
    location.href = "./../Html/gameover.html";
  }
}
