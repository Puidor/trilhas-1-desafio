// 11. Crie uma lógica para calcular a idade de uma pessoa. Essa lógica deverá receber um valor de ano de nascimento no formato “yyyy-MM-dd” e deverá retornar o número da idade da pessoa como resultado.

function calcularIdade(dataNascimento) {
  let anoNascimento = parseInt(dataNascimento.substring(0, 4));
  let anoAtual = new Date().getFullYear();
  let idade = anoAtual - anoNascimento;
  return idade;
}

let dataNascimento = "1991-01-09";
let idade = calcularIdade(dataNascimento);
alert("A idade da pessoa é:" + idade);
