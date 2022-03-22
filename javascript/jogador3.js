function questao1() {
  var resposta = prompt("Digite aqui sua resposta");
  if (resposta == "ul") {
    alert(
      "✓ Você sabe como criar uma lista!! Clique em Continue para irmos à próxima pergunta."
    );
    location.href = "./../Html/jogador3fase2.html";
  } else {
    alert("☹ Xiiii, não é essa hein. Mais uma chance pra você!");
    location.href = "./../Html/jogador3.html";
  }
}
