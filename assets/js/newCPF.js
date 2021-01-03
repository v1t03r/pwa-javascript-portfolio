class ValidateCPF {
  constructor(inputCPF) {
    Object.defineProperty(this, 'cleanCPF', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: inputCPF.replace(/\D+/g, '') // regular expression
    });
  }

  isSequenceNumber() {
    return this.cleanCPF.charAt(0).repeat(11) === this.cleanCPF;
  }

  generateNewCPF() {
    const noDigitsCPF = this.cleanCPF.slice(0, -2);
    const digit1 = ValidateCPF.generateDigit(noDigitsCPF);
    const digit2 = ValidateCPF.generateDigit(noDigitsCPF + digit1);
    this.newCPF = noDigitsCPF + digit1 + digit2;
  }

  static generateDigit(noDigitsCPF) {
    let total = 0;
    let reverse = noDigitsCPF.length + 1;

    for(let numericString of noDigitsCPF) {
      total += reverse * Number(numericString);
      reverse--;
    }

    const digit = 11 - (total % 11);
    return digit <= 9 ? String(digit) : '0';
  }

  validateCPF() {
    if(!this.cleanCPF) return false;
    if(typeof this.cleanCPF !== 'string') return false;
    if(this.cleanCPF.length !== 11) return false;
    if(this.isSequenceNumber()) return false;
    this.generateNewCPF();

    return this.newCPF === this.cleanCPF;
  }
}

class NewCPF {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  format(CPF) {
    return (
      CPF.slice(0, 3) + '.' +
      CPF.slice(3, 6) + '.' +
      CPF.slice(6, 9) + '-' +
      CPF.slice(9, 11)
    );
  }

  generateNewCPF() {
    const noDigitsCPF = this.rand();
    const digit1 = ValidateCPF.generateDigit(noDigitsCPF);
    const digit2 = ValidateCPF.generateDigit(noDigitsCPF + digit1);
    const brandNewCPF = noDigitsCPF + digit1 + digit2;
    return this.format(brandNewCPF);
  }
}

const generate = new NewCPF();
const cpf = document.querySelector('.new-cpf');
cpf.innerHTML = generate.generateNewCPF();