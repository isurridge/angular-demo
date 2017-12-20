import { Component, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { User, UsersService } from '../../../common/services/users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss'],
  inputs: ['user'],
  outputs: ['deactivateUser']
})
export class DeleteUserComponent {
  @Input() user: User;
  @Output() onUserDeactivate = new EventEmitter<User>();

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private usersService: UsersService) {

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      'class': 'modal-sm'
    });
  }

  deactivateUser() {
    this.usersService.deactivateUser(this.user).subscribe(() => {
      this.onUserDeactivate.emit(this.user);
      this.modalRef.hide();
    });
  }

}
