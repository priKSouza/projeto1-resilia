function questao2() {
  var resposta = prompt(
    "Patrick não lembra as pastas que tem em seu projeto, usando o Git, que comando ele usa pra saber as pastas disponíveis?"
  );
  if (resposta == "ls") {
    document.write(
      `<div><p>✓ Boa Resiliente. Sabe usar o Git corretamente.</p>
          <button onclick="window.location.href='./../Html/jogador2fase3.html'">Continue</button></div>`
    );
  } else {
    document.write(`<div><p>☹ Comando errado Resiliente. Pensa direito e tenta de novo vai.</p>
        <button onclick="window.location.href='./../Html/jogador2fase2.html'">Tente de novo</button></div>`);
  }
}

questao2();
