const entrar = document.querySelector('.entrar');
const email = document.querySelector('input[name=email]');
const senha = document.querySelector('input[name=password]');
const checkbox = document.querySelector('#agreement');
const btn = document.querySelector('#submit-btn');
const textarea = document.querySelector('#textarea');
const contador = document.querySelector('#counter');

function login() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

entrar.addEventListener('click', login);

function habilitarBotao() {
  if (checkbox.checked === true) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}
checkbox.addEventListener('click', habilitarBotao);

const wordCounter = 500;
textarea.addEventListener('input', () => {
  const textAreaValue = textarea.value;
  contador.innerHTML = wordCounter - textAreaValue.length;
});
