class ValidateForm {
  constructor() {
    this.form = document.querySelector('.form');
    this.events();
  }

  events() {
    this.form.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const validFields = this.fieldsAreValid();
    const validPasswords = this.passwordsAreValid();

    if(validFields && validPasswords) {
      alert('Successfully submitted form.');
      this.form.submit();
    }
  }

  passwordsAreValid() {
    let valid = true;

    const password = this.form.querySelector('.password');
    const repeatPassword = this.form.querySelector('.repeat-password');

    if(password.value !== repeatPassword.value) {
      valid = false;
      this.newError(password, 'Passwords must match.');
      this.newError(repeatPassword, 'Password and Repeat Password must match.');
    }

    if(password.value.length < 6 || password.value.length > 12) {
      valid = false;
      this.newError(password, 'Password must be between 6 and 12 characters.');
    }

    return valid;
  }

  fieldsAreValid() {
    let valid = true;

    for(let errorText of this.form.querySelectorAll('.text-warning')) {
      errorText.remove();
    }

    for(let field of this.form.querySelectorAll('.validate')) {
      const label = field.previousElementSibling.innerText;

      if(!field.value) {
        this.newError(field, `Field "${label}" can not be blank.`);
        valid = false;
      }

      if(field.classList.contains('cpf')) {
        if(!this.validateCPF(field)) valid = false;
      }

      if(field.classList.contains('user')) {
        if(!this.validateUser(field)) valid = false;
      }

    }

    return valid;
  }

  validateUser(field) {
    const user = field.value;
    let valid = true;

    if(user.length < 3 || user.length > 12) {
      this.newError(field, 'Username must be between 3 and 12 characters.');
      valid = false;
    }

    if(!user.match(/^[a-zA-Z0-9]+$/g)) {
      this.newError(field, 'Username must contain only letters and / or numbers.');
      valid = false;
    }

    return valid;
  }

  validateCPF(field) {
    const cpf = new ValidateCPF(field.value);

    if(!cpf.validateCPF()) {
      this.newError(field, 'Invalid CPF.');
      return false;
    }

    return true;
  }

  newError(field, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('text-warning');
    field.insertAdjacentElement('afterend', div);
  }
}

const validate = new ValidateForm();
