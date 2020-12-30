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