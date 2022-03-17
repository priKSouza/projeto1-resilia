var resposta = prompt(
  "Alexandre sabe mais sobre o conteúdo da semana, em aula ele teve a oportunidade de ajudar outros alunos. Ele deve ajudar o grupo, sim ou não?"
);

function questao1() {
  if (resposta == "sim") {
    document.write(`<p>Yes!!! Alexandre sabe trabalhar em equipe.</p>`);
  } else {
    document.write(
      `<p>Ah não!! Alexandre precisa de umas aulas de Soft com o Thom.</p>`
    );
  }
}

questao1();
