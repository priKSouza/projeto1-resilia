function questao3() {
  var resposta = prompt(
    "Como o Alexandre consegue inserir uma quebra de linha no seu HTML? Lembre: não precisa por o <>."
  );
  if (resposta == "br") {
    document.write(
      `<div><p>✓ Boa Resiliente! Você está caminhando firme para chegar no seu objetivo.</p>
              <button onclick="window.location.href='./../Html/fimdejogo.html'">Clique aqui</button></div>`
    );
  } else {
    window.location.href = "./../Html/gameover.html";
  }
}

questao3();
