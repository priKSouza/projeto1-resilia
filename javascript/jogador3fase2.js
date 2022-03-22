function questao2() {
  var resposta = prompt("Digite aqui sua resposta, só o nome sem o <>");
  if (resposta == "footer") {
    alert(
      "✓ A página do Alexandre vai ficar incrível. Vamos para próxima fase?"
    );
    location.href = "./../Html/jogador3fase3.html";
  } else {
    alert("☹ Você esqueceu? Vou te dar outra chance, capricha!");
    location.href = "./../Html/jogador3fase2.html";
  }
}
