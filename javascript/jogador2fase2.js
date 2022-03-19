function questao2() {
  var resposta = prompt(
    "Patrick assiste as aulas mexendo nas redes sociais. Esse é o comportamento de um Resiliente (sim) ou (não)?"
  );
  if (resposta == "sim") {
    document.write(
      `<div><p>✓ Você sabe onde quer chegar! Foque nos estudos que você vai longe.</p>
          <button onclick="window.location.href='./../Html/jogador2fase3.html'">Continue</button></div>`
    );
  } else {
    document.write(`<div><p>☹ Você pode mexer nas redes sociais depois que acabar os estudos. Quer tentar de novo?</p>
        <button onclick="window.location.href='./../Html/jogador2fase2.html'">Tente de novo</button></div>`);
  }
}

questao2();
