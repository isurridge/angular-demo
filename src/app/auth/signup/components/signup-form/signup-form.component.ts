import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../../common/services/auth.service';

import { ValidationService } from '../../../../common/services/validation.service';

/**
 * The SignupFormComponent handles user registration for the application via the AuthService.
 */
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  /**
   * The form group representing the signup form controls.
   */
  public signupForm: FormGroup;

  /**
   * FormControl instance for handling email field.
   *
   * The field is required.
   *
   * @type {FormControl}
   */
  public email = new FormControl({value: '', disabled: true}, Validators.required);

  /**
   * FormControl instance for handling password field.
   *
   * The field is required.
   *
   * @type {FormControl}
   */
  public password = new FormControl('', Validators.compose([
    Validators.required, this.validationService.password
  ]));

  /**
   * FormControl instance for handling password field.
   *
   * The field is required.
   *
   * @type {FormControl}
   */
  public confirmPassword = new FormControl('', Validators.compose([
    Validators.required, this.validationService.password
  ]));

  /**
   * FormControl instance for handling name field.
   *
   * The field is required.
   *
   * @type {FormControl}
   */
  public name = new FormControl('', Validators.required);

  /**
   * FormControl instance for handling phone number field.
   *
   * The field is required.
   *
   * @type {FormControl}
   */
  public phoneNumber = new FormControl('', Validators.compose([
    Validators.required, this.validationService.phoneNumber
  ]));

  /**
   * Object for exposing authService error messages to the view.
   *
   * @type {{}}
   */
  public error: any = {};
  public invitationId: string;

  /**
   * Responsible for initializing the login component
   *
   * @param {Router} router
   * @param {ActivatedRoute} activatedRoute
   * @param {FormBuilder} builder
   * @param {AuthService} authService
   * @param {ValidationService} validationService
   */
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private builder: FormBuilder,
    private authService: AuthService,
    private validationService: ValidationService,
  ) {
    this.signupForm = builder.group({
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
      name: this.name,
      phoneNumber: this.phoneNumber,
    });
  }

  ngOnInit() {
    this.verifyInvitation();
  }

  /**
   * Sign up User function responsible for passing registration attributes to authService.
   *
   * It will store a User object with the key `currentUser` in local storage
   * and navigate user to home screen of application.
   *
   */
  signupUser() {
    this.authService.signupUser(
      this.email.value,
      this.password.value,
      this.name.value,
      this._formatPhone(this.phoneNumber.value)
    ).subscribe((data) => {
      console.log('Success:', data);
      (data.userConfirmed) ? this.router.navigate(['/login']) : this.router.navigate(['/confirm-signup']);
    }, (error) => {
      console.log(error);
      this.error.message = error.message;
    });
  }

  /**
   * Checks for invitationId in query params and validates.
   *
   * Redirects user to login if invitationId is not present or invalid.
   *
   */
  verifyInvitation() {
    this.activatedRoute.queryParams.mergeMap((params) => {
      return this.authService.verifyInvitationId(params.invitationId);
    }).map((res) => {
      return res.json();
    }).subscribe((data) => {
      this.email.patchValue(data.data.email);
    }, (error) => {
      console.log('error:');
      console.log(error.json());
      this.router.navigate(['/login']);
    });
  }

  _formatPhone(phone: string) {
    let out = '+1';
    out += phone.replace(/-/g, '');

    return out;
  }
}
