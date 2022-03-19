function questao1() {
  var resposta = prompt(
    "Alexandre está em dúvida de como criar uma lista não ordenada. Você consegue ajudá-lo, qual tag ele precisa usar, ul ou ol?"
  );
  if (resposta == "ul") {
    document.write(
      `<div><p>✓ Você sabe como criar uma lista!! Clique em Continue para irmos à próxima pergunta.</p>
      <button onclick="window.location.href='./../Html/jogador3fase2.html'">Continue</button></div>`
    );
  } else {
    document.write(`<div><p>☹ Xiiii, não é essa hein. Mais uma chance pra você!</p>
    <button onclick="window.location.href='./../Html/jogador3.html'">Tente de novo</button></div>`);
  }
}

questao1();
