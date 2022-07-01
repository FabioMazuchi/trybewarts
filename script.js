const entrar = document.querySelector('.entrar');
const email = document.querySelector('.email');
const senha = document.querySelector('.senha');
const checkbox = document.querySelector('#agreement');
const btn = document.querySelector('#submit-btn');
const textarea = document.querySelector('#textarea');
const contador = document.querySelector('#counter');
const select = document.querySelector('#house');
const radioFamilia = document.querySelectorAll('[name=family]');
const checkVontade = document.querySelectorAll('[name=vontade]');
const notaAvaliacao = document.querySelectorAll('[name=rate]');
const form = document.querySelector('#evaluation-form');
console.log(form);

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
    checkbox.classList.add('subject');
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

function enviar(e) {
  e.preventDefault()
  // form.style.display = 'none';
  const nome = document.querySelector("[name=input-name]").value;
  const sobrenome = document.querySelector("[name=input-lastname]").value;
  const email = document.querySelector("[name=input-email]").value;
  const casa = getSelected();
  const familia = getRadio(radioFamilia);
  const vontades = getChecks();
  const avaliacao = getRadio(notaAvaliacao);
  const comentario = textarea.value;
  let materias = '';

  exibirInfo('Nome: ', nome + ' ' + sobrenome);
  exibirInfo('Email: ', email);
  exibirInfo('Casa: ', casa);
  exibirInfo('Família: ', familia);
  for (let i = 0; i < vontades.length; i++) {
    materias += vontades[i] + ' ';
    console.log(materias);
  }
  exibirInfo('Matérias: ', materias);
  exibirInfo('Avaliação: ', avaliacao);
  exibirInfo('Observações: ', comentario);
}

function getSelected() {
  let selecinado;

  for (let i = 0; i < select.length; i++) {
    if (select[i].selected === true) {
      selecinado = select[i].innerHTML;
    }
  }
  return selecinado;
}

function getRadio(radios) {
  let resultado;

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      resultado = radios[i].value;
    }
  }
  return resultado;
}

function getChecks() {
  let array = [];
  for (let i = 0; i < checkVontade.length; i += 1) {   
    if(checkVontade[i].checked === true){
      // checkVontade[i].classList.add('subject');
      array.push(checkVontade[i].value);
    }
    checkVontade[i].classList.add('subject');
  }
  return array
}

function exibirInfo(key, valor) {
  const divInfo = document.querySelector("#info");
  const p = document.createElement("p");
  p.innerHTML = key + valor;
  divInfo.appendChild(p);
}

btn.addEventListener('click', enviar);