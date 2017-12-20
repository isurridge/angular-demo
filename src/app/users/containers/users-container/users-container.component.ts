import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User, UsersService } from '../../../common/services/users.service';
import { IUser } from '../../../common/models/users'

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss'],
  providers: [UsersService]
})
export class UsersContainerComponent implements OnInit {

  public users$: Observable<User[]>;

  constructor(private usersService: UsersService) {

  }

  ngOnInit() {
    this.users$ = this.usersService.usersList$;
    this.usersService.loadUsersData();
  }

  appendUserRow(user: IUser) {
    this.usersService.appendUser(user);
  }

  removeUserRow(user: User) {
    this.usersService.spliceUser(user);
  }
}
