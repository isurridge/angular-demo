import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../../common/services/auth.service';
import { LocalStorageService } from '../../../../common/services/local-storage.service';

/**
 * The ConfirmationFormComponent handles
 * verifying newly registered users.
 */
@Component({
  selector: 'app-confirmation-form',
  templateUrl: './confirmation-form.component.html',
  styleUrls: ['./confirmation-form.component.scss']
})
export class ConfirmationFormComponent implements OnInit {

  /**
   * The username injected via query param.
   */
  public confirmationUsername: string;

  /**
   * The form group representing the verification
   * form controls.
   */
  public confirmationForm: FormGroup;

  /**
   * FormControl instance for handling username
   * field.
   *
   * @type {FormControl}
   */
  public confirmationCode = new FormControl('', Validators.required);

  /**
   * Object for exposing error messages to the view.
   *
   * @type {{}}
   */
  public error: any = {};

  /**
   * Responsible for initializing the login component
   *
   * @param {FormBuilder} builder
   * @param {Router} router
   * @param {AuthService} authService
   * @param {LocalStorageService} localStorageService
   */
  constructor(
    private builder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
  ) {

    /**
     *
     * @type {FormGroup}
     */
    this.confirmationForm = builder.group({
      confirmationCode: this.confirmationCode,
    });
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
       if (typeof params.username === 'undefined') {
        this.router.navigate(['/login']);
       } else {
        this.confirmationUsername = params.username;
       }
    });
  }

  /**
   * Responsible for completing a user registration
   * with the completed challenge response.
   */
  confirmRegistration() {
    this.authService.confirmRegistration(
      this.confirmationCode.value,
      this.confirmationUsername
    ).map((res) => {
      return res.json();
    }).subscribe(() => {
      this.router.navigate(['/login']);
    }, (error) => {
      error = error.json();
      console.log(error);
      this.error.message = 'Invalid confirmation code';
    });
  }
}
