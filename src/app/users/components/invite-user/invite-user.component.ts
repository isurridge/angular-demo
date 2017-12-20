import {Component, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersService, ROLE_MAP} from '../../../common/services/users.service';
import {ValidationService} from '../../../common/services/validation.service';
import {IUser} from "../../../common/models/users";

@Component({
  selector: 'app-invite-user',
  templateUrl: './invite-user.component.html',
  styleUrls: ['./invite-user.component.scss'],
  providers: [FormBuilder]
})

export class InviteUserComponent implements OnInit {
  @Output() onUserInvite = new EventEmitter();

  public inviteUsersForm: FormGroup;
  public roleMap = ROLE_MAP;

  private selectedRoleId: any = null;
  public selectedRoleName: string = 'Select';

  constructor(private usersService: UsersService,
              private validationService: ValidationService,
              private builder: FormBuilder) {

    this.inviteUsersForm = builder.group({
      email: ['', Validators.compose([
        Validators.required,
        validationService.email
      ])]
    });
  }

  ngOnInit() {

  }

  submit(data: any) {
    const dirtyUser: IUser = {
      email: data.email,
      status: 1,
      role: parseInt(this.selectedRoleId)
    };

    this.usersService.inviteUser(dirtyUser).subscribe((cleanUser) => {
      this.onUserInvite.emit(cleanUser);
    });
  }

  setRole(role: any) {
    this.selectedRoleId = role;
    this.selectedRoleName = ROLE_MAP[role];
  }
}
