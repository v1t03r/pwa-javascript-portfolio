// Capturar evento de submit do formulário
const form = document.querySelector('#form');

// Cria função anônima que recebe (e) => evento
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Salvar valor de peso e altura do formulário
  const inputWeight= e.target.querySelector('#weight');
  const inputHeight = e.target.querySelector('#height');

  // Converter peso e altura (String inputs para Number)
  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);

  // Checar entrada peso (NaN/False)
  if (!weight) {
    setResult('Invalid Weight. Please try again!', false);
    return;
  }

  // Checar entrada altura (NaN/False)
  if (!height) {
    setResult('Invalid Height. Please try again!', false);
    return;
  }

  // Calcula IMC
  const bmi = getBMI(weight, height);

  // Calcula Nível de IMC
  const levelBMI = getLevelBMI(bmi);

  // Cria Mensagem de resultado
  const msg = `Your BMI is ${bmi} (${levelBMI}).`;

  // Define resultado de sucesso
  setResult(msg, true);
});
// Fim da função anônima ˆ


// Função para calcular nível IMC
function getLevelBMI(bmi) {
  const level = ['Underweight', 'Normal', 'Overweight', 'Obese'];

  if (bmi >= 30) return level[3];
  if (bmi >= 24.9) return level[2];
  if (bmi >= 18.5) return level[1];
  if (bmi < 18.5) return level[0];
}

// Função para calcular IMC
function getBMI(weight, height) {
  const bmi = weight / height ** 2;
  return bmi.toFixed(2); // 2 casas decimais
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
    document.getElementById("result").className = "alert alert-info";
  } else {
    document.getElementById("result").className = "alert alert-danger";
  }

  //Coloca a mensagem na div resultado
  div.innerHTML = msg;
  result.appendChild(div);
}
