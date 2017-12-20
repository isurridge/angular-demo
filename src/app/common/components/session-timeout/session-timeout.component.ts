import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AuthService, LOGIN_URL, SESSION_TIMEOUT_THRESHOLD } from '../../services/auth.service';

@Component({
  selector: 'app-session-timeout',
  templateUrl: './session-timeout.component.html',
  styleUrls: ['./session-timeout.component.scss']
})
export class SessionTimeoutComponent implements OnInit {
  @ViewChild('sessionExpirationModal') modal: ModalDirective;

  public modalVisible: boolean = false;
  public countdown: number;
  private _thresholdTimer: any;
  private _countdownTimer: any;
  private _countdownInterval: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.authService.user.subscribe((user) => {
      if (typeof user.timeout === 'undefined') {
        return this.logout();
      }

      this._resetTimers().then(() => {
        // session TTL
        const timeout = (user.timeout - Date.now());
        if (timeout < 0) {
          this.logout();
        }

        // track a session timeout
        this._thresholdTimer = setTimeout(() => {
          this.modalVisible = true;
          this.countdown = SESSION_TIMEOUT_THRESHOLD - 1000;

          this._countdownInterval = setInterval(() => {
            this.countdown -= 1000;
          }, 1000);

          this._countdownTimer = setTimeout(() => {
            this.logout();
          }, SESSION_TIMEOUT_THRESHOLD);
        }, (timeout - SESSION_TIMEOUT_THRESHOLD));
      });
    });
  }

  hideModal() {
    this.modalVisible = false;
  }

  logout() {
    this._resetTimers().then(() => {
      this.hideModal();
      this.router.navigate([LOGIN_URL]);
    });
  }

  extendSession() {
    this.authService.refreshAccess().subscribe(() => {
      this.hideModal();
    });
  }

  _resetTimers() {
    clearTimeout(this._thresholdTimer);
    clearTimeout(this._countdownTimer);
    clearTimeout(this._countdownInterval);
    return Promise.resolve();
  }
}
