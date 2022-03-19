function questao1() {
  var resposta = prompt(
    "Patrick finalizou seu exercício e precisa criar seu repositório no Git. Que comando ele utiliza para criar seu repositório?"
  );
  if (resposta == "git init") {
    document.write(
      `<div><p>✓ Você sabe como iniciar seu repositório. Parabéns!</p>
        <button onclick="window.location.href='./../Html/jogador2fase2.html'">Continue</button></div>`
    );
  } else {
    document.write(`<div><p>☹ Esse não é o comando correto. Revise suas anotações e tente de novo.</p>
      <button onclick="window.location.href='./../Html/jogador2.html'">Tente de novo</button></div>`);
  }
}

questao1();
