function questao1() {
  var resposta = prompt("Digite o comando aqui");
  if (resposta == "git init") {
    alert("✓ Você sabe como iniciar seu repositório. Parabéns!");
    location.href = "./../Html/jogador2fase2.html";
  } else {
    alert(
      "☹ Esse não é o comando correto. Revise suas anotações e tente de novo."
    );
    location.href = "./../Html/jogador2.html";
  }
}
