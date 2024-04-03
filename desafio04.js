// 4. Em uma pequena vila, o fazendeiro precisa separar os números primos para determinar quantos novos campos plantar. Ele pede sua ajuda para identificar esses números criando um algoritmos. Os números são: 23, 16, 11, 8, 19, 14, 5, 21.

// Lista de números
let numeros = [23, 16, 11, 8, 19, 14, 5, 21];

// Função para verificar se é primo
function verificarPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      return false;
    }
  }
  return true;
}

let listaDosNumerosPrimos = [];

for (let i = 0; i < numeros.length; i++) {
  if (verificarPrimo(numeros[i])) {
    listaDosNumerosPrimos.push(numeros[i]);
  }
}

alert(listaDosNumerosPrimos);
