const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const generateCapital = () => String.fromCharCode(rand(65, 91));
const generateSmall = () => String.fromCharCode(rand(97, 123));
const generateNumber = () => String.fromCharCode(rand(48, 58));
const symbols = ',.;~^[]{}<>?!@#$%*()_+=-';
const generateSymbol = () => symbols[rand(0, symbols.length)];

function generatePassword(amount, capital, small, number, symbol) {
  const passwordArray = [];
  amount = Number(amount);

  for(let i = 0; i < amount; i++) {
    capital && passwordArray.push(generateCapital());
    small && passwordArray.push(generateSmall());
    number && passwordArray.push(generateNumber());
    symbol && passwordArray.push(generateSymbol());
  }

  return passwordArray.join('').slice(0, amount);
}

// Form Handler

const newPassword = document.querySelector('.new-password');
const numberCharacters = document.querySelector('.number-characters');
const chkCapital = document.querySelector('.chk-capital');
const chkSmall = document.querySelector('.chk-small');
const chkNumbers = document.querySelector('.chk-numbers');
const chkSymbols = document.querySelector('.chk-symbols');
const generateNewPassword = document.querySelector('.generate-password');

generateNewPassword.addEventListener('click', () => {
  newPassword.innerHTML = generate();
  });

function generate() {
  const password = generatePassword(
    numberCharacters.value,
    chkCapital.checked,
    chkSmall.checked,
    chkNumbers.checked,
    chkSymbols.checked
  );

  return password || 'Nothing selected.';
}