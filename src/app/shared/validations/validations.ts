import { ValidatorFn, FormGroup, AbstractControl } from '@angular/forms';

/**
 * Verifica se as senhas são iguais.
 */
export const isSenhaValid: ValidatorFn = (formGroup: FormGroup) => {
  if(formGroup){
    const senha = formGroup.get('senha').value;
    const reSenha = formGroup.get('reSenha').value;

    return senha === reSenha ? null : {senha: true};
  }
  return null;
}

/**
 * Verifica se o campo é nulo.
 */
export const isNotNull: ValidatorFn = (form: AbstractControl) => {
  if(form){
    if(form.value && form.value.trim() && form.value != "null"){
      return null;
    }
    return {notNull: true};
  }
  return {notNull: true};
}

