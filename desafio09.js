// 9. Em um jogo de RPG, o personagem do jogador possui pontos de vida (HP) que são reduzidos quando ele sofre danos dos inimigos. Seu personagem começa com 100 pontos de vida e sofre danos de 20 pontos em um ataque. Crie um algoritmo informando quantos pontos de vida restarão após três ataques?

let pontosDeVida = 100;
let danoPorAtaque = 20;
let numeroDeAtaques = 3;

let pontosDeVidaRestantes = pontosDeVida - danoPorAtaque * numeroDeAtaques;

alert("Após três ataques, restarão " + pontosDeVidaRestantes + " pontos de vida.");
