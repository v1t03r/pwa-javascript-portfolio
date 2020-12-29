const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputTotal= e.target.querySelector('#total');
  const inputPercentual = e.target.querySelector('#percentual');
  const total = Number(inputTotal.value);
  const percentual = Number(inputPercentual.value);
  const error = 'Invalid entry. Please try again!';

  if (!total) {
    setResult(error, false);
    return;
  }

  if (!percentual) {
    setResult(error, false);
    return;
  }

  const result = getNumbers(total, percentual);
  const msg = `Result: ${percentual} of ${total} is ${result}%.`;
  setResult(msg, true);

});

function getNumbers(total, percentual) {
  const result = (100 * percentual)/total;
  return result.toFixed(2);
}

// Função para criar <p>
function createDiv() {
  const div = document.createElement('div');
  return div;
}

// Função para definir resultado
function setResult(msg, isValid) {

  const result = document.querySelector('#result');

  result.innerHTML = '';

  // Cria parágrafo
  const div = createDiv();

  // Checa a validade e aplica classe
  if (isValid) {
    document.getElementById("result").className = "alert alert-warning";
  } else {
    document.getElementById("result").className = "alert alert-danger";
  }

  //Coloca a mensagem na div resultado
  div.innerHTML = msg;
  result.appendChild(div);
}
