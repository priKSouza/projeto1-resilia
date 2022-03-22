function questao2() {
  var resposta = prompt("Digite aqui sua resposta");
  if (resposta == "ls") {
    alert("✓ Boa Resiliente. Sabe usar o Git corretamente.");
    location.href = "./../Html/jogador2fase3.html";
  } else {
    alert("☹ Comando errado Resiliente. Pensa direito e tenta de novo vai.");
    location.href = "./../Html/jogador2fase2.html";
  }
}
