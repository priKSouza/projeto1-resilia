function questao1() {
  var resposta = prompt("Digite sim ou não.");
  if (resposta == "sim") {
    alert("✓ Yes!!! Assim você vai ajudar a Ana a chegar no objetivo.");
    location.href = "./../Html/jogador1fase2.html";
  } else {
    alert("☹ Ah não!! Assim a Ana não vai chegar muito longe!");
    location.href = "./../Html/jogador1.html";
  }
}

//como fazer o contador para 3 tentativas de resposta

/*var contador = 2;
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
