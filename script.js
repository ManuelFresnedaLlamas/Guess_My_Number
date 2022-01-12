'use strict';

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess || guess > 20 || guess < 1) {
    document.querySelector('.message').textContent =
      '🛑 ¡No es un número válido!';
  } else {
    //Si es válido el número...
    if (score === 0) {
      return;
    }
    if (guess === secretNumber) {
      //Se gana
      document.querySelector('.message').textContent =
        '🎉🎉🎉 Ganaste, ¡enhorabuena! 🎉🎉🎉';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
    if (guess < secretNumber) {
      //Mostraremos mensaje de que es superior
      document.querySelector('.message').textContent =
        '⬆️⬆️⬆️ Es un número superior';
      score--;
      document.querySelector('.score').textContent = score;
    }
    if (guess > secretNumber) {
      //Mostraremos mensaje de que es inferior
      document.querySelector('.message').textContent =
        '⬇️⬇️⬇️ Es un número inferior';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  if (score <= 0) {
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = '❌ ¡Has perdido!';
    document.querySelector('body').style.backgroundColor = '#c00000';
    return;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
