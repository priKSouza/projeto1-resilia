function questao2() {
  var resposta = prompt(
    "Após 2h de estudos, Ana resolveu desligar o notebook. O que ela deve fazer: tomar uma cerveja (sim), estudar até cansar (não)?"
  );
  if (resposta == "sim") {
    document.write(
      `<div><p>✓ Boa! Descansar e fazer o que gosta também faz parte do processo.</p>
        <button onclick="window.location.href='./../Html/jogador1fase3.html'">Continue</button></div>`
    );
  } else {
    document.write(`<div><p>☹ Estudar é fundamental, mas o descanso também precisa acontecer.</p>
      <button onclick="window.location.href='./../Html/jogador1fase2.html'">Tente de novo</button></div>`);
  }
}

questao2();
