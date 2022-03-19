function questao3() {
  var resposta = prompt(
    "Patrick está em dúvida de qual comando usar para subir seu projeto jo GitHub. Você consegue ajudá-lo?"
  );
  if (resposta == "git push") {
    document.write(
      `<div><p>✓ Boa Resiliente! Você sabe como mandar seu projeto para o GitHub.</p>
            <button onclick="window.location.href='./../Html/fimdejogo.html'">Clique aqui</button></div>`
    );
  } else {
    window.location.href = "./../Html/gameover.html";
  }
}

questao3();
