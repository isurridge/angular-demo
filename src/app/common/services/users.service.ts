import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from "rxjs/Observable";
import { IUser } from "../models/users";


export class User implements IUser {
  id?: number;
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  status?: number;
  role?: number;
  timeout?: number;
}
export const EMPTY_USER: User[] = [];
export const STATUS_MAP: any = {
  '1': 'Pending',
  '2': 'Accepted',
  '3': 'Revoked'
};
export const ROLE_MAP: any = {
  '1': 'User',
  '2': 'Admin',
  '3': 'Super User',
  '4': 'Super Admin'
};

@Injectable()
export class UsersService {

  private usersListSubject = new BehaviorSubject<User[]>(EMPTY_USER);
  usersList$: Observable<User[]> = this.usersListSubject.asObservable();

  constructor() {

  }

  loadUsersData() {
    this.usersListSubject.next([
      { id: 1, firstName: 'john', lastName: 'doe', email: 'johndoe@sherlocktest.com', status: 2, role: 2 },
      { id: 2, firstName: 'jane', lastName: 'doe', email: 'janedoe@sherlocktest.com', status: 1, role: 1 },
      { id: 3, firstName: 'jasper', lastName: 'doe', email: 'jasperdoe@sherlocktest.com', status: 2, role: 1 }
    ]);
  }

  inviteUser(user: User) {
    // @todo implement user service invite endpoint
    return new BehaviorSubject(user);
  }

  deactivateUser(user: User) {
    // @todo implement user service deactivate endpoint
    return new BehaviorSubject(user);
  }

  appendUser(user: User) {
    const userData = this.usersListSubject.getValue();
    userData.push(user);

    this.usersListSubject.next(userData);
  }

  spliceUser(userToDeactivate: User) {
    const dirtyUserData = this.usersListSubject.getValue(),
    cleanUserData = dirtyUserData.filter((user) => {
      return (user.id !== userToDeactivate.id);
    });

    this.usersListSubject.next(cleanUserData);
  }
}
