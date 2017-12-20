import { ConfirmationContainerComponent } from './confirmation/containers/confirmation-container/confirmation-container.component';
import { ConfirmationFormComponent } from './confirmation/components/confirmation-form/confirmation-form.component';
import { LoginContainerComponent } from './login/containers/login-container/login-container.component';
import { LoginFormComponent } from './login/components/login-form/login-form.component';
import { SignupContainerComponent } from './signup/containers/signup-container/signup-container.component';
import { SignupFormComponent } from './signup/components/signup-form/signup-form.component';

export const AUTH_DECLARATIONS = [
  SignupContainerComponent,
  SignupFormComponent,
  ConfirmationContainerComponent,
  ConfirmationFormComponent,
  LoginContainerComponent,
  LoginFormComponent,
];
