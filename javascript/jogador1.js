var resposta = prompt(
  "Ana precisa estar na aula às 9h mas acordou tarde e vai atrasar. Você acha que ela informa sobre o atraso e vai pra aula, ou ela não assiste a aula? Se sim (ela vai à aula) ou não (nada de aula)?"
);

function questao1() {
  if (resposta == "sim") {
    document.write(
      `<div><p>Yes!!! Assim você vai ajudar a Ana a chegar no objetivo.</p>
      <button onclick="window.location.href='./../Html/jogador1fase2.html'">Continue</button></div>`
    );
  } else {
    document.write(`<div><p>Ah não!! Assim a Ana não vai chegar muito longe!</p>
    <button onclick="window.location.href='./../Html/jogador1.html'">Tente de novo</button></div>`);
  }
}

questao1();

//como fazer o contador para 3 tentativas de resposta

/*contador = 3;
while(contador >= 1){
  if(resposta.toLowerCase == 'sim'){
  document.write(
      `<div><p>Yes!!! Assim você vai ajudar a Ana a chegar no objetivo.</p>
      <button onclick="window.location.href='./../Html/jogador1fase2.html'">Continue</button></div>`
    )
    break;
  }
  document.write(`<div><p>Ah não!! Assim a Ana não vai chegar muito longe! Você ainda tem ${contador} tentativas.</p>
    <button onclick="window.location.href='./../Html/jogador1.html'">Tente de novo</button></div>`
    );
    contador--
}
*/
