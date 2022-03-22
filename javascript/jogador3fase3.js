function questao3() {
  var resposta = prompt(" Digite aqui sua resposta, não precisa por o <>.");
  if (resposta == "br") {
    alert(
      "✓ Boa Resiliente! Você está caminhando firme para chegar no seu objetivo."
    );
    location.href = "./../Html/fimdejogo.html";
  } else {
    alert("Você vacilou! Recomece o jogo.");
    location.href = "./../Html/gameover.html";
  }
}
