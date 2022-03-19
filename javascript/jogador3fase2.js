function questao2() {
  var resposta = prompt(
    "Alexandre precisa colocar um 'rodapé' na sua página. Com que tag ele consegue fazer isso, usando o small ou o footer?"
  );
  if (resposta == "footer") {
    document.write(
      `<div><p>✓ A página do Alexandre vai ficar incrível. Vamos para próxima fase?</p>
            <button onclick="window.location.href='./../Html/jogador3fase3.html'">Continue</button></div>`
    );
  } else {
    document.write(`<div><p>☹ Você esqueceu? Vou te dar outra chance, capricha!</p>
          <button onclick="window.location.href='./../Html/jogador3fase2.html'">Tente de novo</button></div>`);
  }
}

questao2();
