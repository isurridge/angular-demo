import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {
  email(control: any) {
    const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!EMAIL_REGEXP.test(control.value)) {
      return {
        email: {
          valid: false
        }
      };
    }
    return null;
  }

  phoneNumber(control: any) {
    const validPhoneNumber = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
    if (!validPhoneNumber.test(control.value)) {
      return {
        phoneNumber: {
          valid: false
        }
      };
    }
    return null;
  }

  /**
   * Responsible for validating passwords.
   *
   * Rules are as follows:
   * - require numbers
   * - require special characters
   * - require uppercase letters
   * - require lowercase letters
   *
   * @param control
   * @returns {any}
   */
  password(control: any) {
    const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (!validPassword.test(control.value)) {
      return {
        password: {
          valid: false
        }
      };
    }
    return null;
  }




}
