import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService, HOME_URL } from '../../../../common/services/auth.service';

/**
 * The LoginFormComponent handles logging
 * in to the application via the AuthService.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  /**
   * Controls the login form loading layer
   */
  public loading: boolean;

  /**
   * The form group representing the login form controls.
   */
  public loginForm: FormGroup;

  /**
   * FormControl instance for handling username field.
   *
   * The field is required.
   *
   * @type {FormControl}
   */
  public username = new FormControl('', Validators.required);

  /**
   * FormControl instance for handling username field.
   *
   * The field is required.
   *
   * @type {FormControl}
   */
  public password = new FormControl('', Validators.required);

  /**
   * Object for exposing authService error messages to the view.
   *
   * @type {{}}
   */
  public error: any = {};

  /**
   * Responsible for initializing the login component.
   *
   * @param builder
   * @param router
   * @param authService
   * @param localStorageService
   */
  constructor(
    private builder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {

    /**
     *
     * @type {FormGroup}
     */
    this.loginForm = builder.group({
      username: this.username,
      password: this.password,
    });
  }

  /**
   * Login function responsible for passing username and password off to authService.
   *
   * It will store a User object with the key `currentUser` in local storage
   * and navigate user to home screen of application.
   *
   */
  login() {
    this.loading = true;
    this.authService.login(this.username.value, this.password.value).subscribe(() => {
      this.router.navigate([HOME_URL]);
    }, (error) => {
      this.error.message = error.msg;
    }, () => {
      this.loading = false;
    });
  }
}
