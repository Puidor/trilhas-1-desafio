// 10. Desenvolver um programa para contar o número de letras maiúsculas da string abaixo: “LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY”

// String fornecida
let frase = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";

// Função para contar letras maiúsculas
function contarLetrasMaiusculas(texto) {
  let count = 0;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] >= "A" && texto[i] <= "Z") {
      count++;
    }
  }
  return count;
}

// Chamar a função e exibir o resultado
let numeroLetrasMaiusculas = contarLetrasMaiusculas(frase);
alert("O número de letras maiúsculas na string é: " + numeroLetrasMaiusculas);
