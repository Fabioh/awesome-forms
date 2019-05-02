import { FormControl, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

export function IpValidatorMessage(err, field: FormlyFieldConfig) {
  return `"${field.formControl.value}" is not a valid IP Address`;
}

export function IpValidator(control: FormControl): ValidationErrors {
  return /(\d{1,3}\.){3}\d{1,3}/.test(control.value) ? null : { 'ip': true };
}

export function IpAsyncValidator(control: FormControl): Promise<{}> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (/(\d{1,3}\.){3}\d{1,3}/.test(control.value)) {
        // console.log(`${control.value} passou na regex`);
        resolve({ 'ip': true });
      } else {
        // console.log(`${control.value} não passou na regex`);
        resolve(null);
      }
    }, 1000);
  });
}
