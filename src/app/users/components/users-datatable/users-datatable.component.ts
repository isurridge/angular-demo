import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../common/services/users.service';


@Component({
  selector: 'app-users-datatable',
  templateUrl: './users-datatable.component.html',
  styleUrls: ['./users-datatable.component.scss']
})
export class UsersDatatableComponent implements OnInit {
  @ViewChild('table') table: any;
  @Input() rows: any = {};
  @Output() onUserDeactivate = new EventEmitter<User>();

  ngOnInit() {

  }

  deactivateUser(user: User) {
    this.onUserDeactivate.emit(user);
  }
}
