var contador = 3;

function questao1() {
  while (contador >= 0) {
    var resposta = prompt("Digite o comando aqui");
    if (resposta == "git init") {
      alert("✓ Você sabe como iniciar seu repositório. Parabéns!");
      location.href = "./../Html/jogador2fase2.html";
    } else {
      alert(
        "☹ Esse não é o comando correto. Revise suas anotações e tente de novo."
      );
      contador--;

      location.href = "./../Html/jogador2.html";
      if (contador <= 0) {
        location.href = "./../Html/gameover.html";
      }
    }
  }
}
