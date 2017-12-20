import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { LocalStorageService } from './local-storage.service';

import { User } from './users.service';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


/**
 * The local storage key that holds the current
 * authorization claim.
 *
 * @type {string}
 */
export const CURRENT_AUTH_KEY = 'currentAuth';

/**
 * The URL that users use to log in to the app.
 *
 * @type {string}
 */
export const LOGIN_URL = '/login';

/**
 * The URL that represents 'home' in the app.
 *
 * @type {string}
 */
export const HOME_URL = '/dashboard/executive-summary';

/**
 * The endpoint for interacting with session
 * resources.
 *
 * @type {string}
 */
export const SESSION_ENDPOINT = 'http://localhost:8090/api/sessions';

/**
 * The number of milliseconds before a session
 * timeout that a warning should be rendered.
 */
export const SESSION_TIMEOUT_THRESHOLD = 60000;

/**
 * The auth service is responsible for
 * logging users in and out of the Sherlock application.
 */
@Injectable()
export class AuthService {

  /**
   * The currently logged in user.
   *
   * @type {BehaviorSubject<{}>}
   */
  public user = new BehaviorSubject(new User);

  /**
   * An authentication claim for the current
   * logged in user.
   *
   * This subject tracks a JWT access token,
   * identity token and refresh token.
   *
   * @type {BehaviorSubject}
   */
  private _auth = new BehaviorSubject({});

  constructor(
    private localStorageService: LocalStorageService,
    private http: Http
  ) {
    this._auth.subscribe((auth) => {
      if (Object.keys(auth).length < 1) {
        return;
      }

      this.localStorageService.set(CURRENT_AUTH_KEY, JSON.stringify(auth));
    })
  }

  /**
   * Responsible from loading a user from the
   * Cognito identity token.
   */
  loadIdentity() {
    const storedAuth = JSON.parse(this.localStorageService.get(CURRENT_AUTH_KEY));

    if (storedAuth != null && typeof storedAuth.idToken !== 'undefined') {
      this._loadUser(storedAuth.idToken);
    } else {
      this.user.next(new User);
    }
  }

  /**
   * Responsible for logging users into the app.
   *
   * This method will take a username and password and
   * attempt to authenticate via HTTP request.
   *
   * It will store a User object with the key `currentUser` in local storage.
   *
   * @param {string} username
   * @param {string} password
   * @returns {Observable<Response>}
   */
  login(username: string, password: string) {
    let currentUser: any = {
      username: username,
      password: password
    };

    return this.http.post(SESSION_ENDPOINT, JSON.stringify(currentUser), new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })).map((res) => {
      const session = res.json();

      // store auth & update user
      this._auth.next(session);

      return session;
    }).catch((err) => {
      return Observable.throw(Object.assign({}, err.json(), {
        status: err.status
      }));
    });
  }

  /**
   * Responsible for logging users out of
   * the application.
   *
   * This method will remove the current user
   * object from local storage.
   */
  logout() {
    // @todo delete session and integrate w/ cognito
    localStorage.removeItem(CURRENT_AUTH_KEY);
  }

  /**
   * Responsible for refreshing a user session
   * by swapping out the Cognito access token
   * with a refresh token.
   */
  refreshAccess() {
    const storedAuth = JSON.parse(this.localStorageService.get(CURRENT_AUTH_KEY));

    return this.http.put(SESSION_ENDPOINT, JSON.stringify({
      accessToken: storedAuth.accessToken,
      refreshToken: storedAuth.refreshToken
    }), new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })).map((res) => {
      let session = res.json();

      // add refresh token back into the session
      session.refreshToken = storedAuth.refreshToken;

      this._auth.next(session);
      this._loadUser(session.idToken);

      return session;
    }).catch((err) => {
      console.log(err);
      return Observable.throw(Object.assign({}, err.json(), {
        status: err.status
      }));
    });
  }

  /**
   * Responsible for signing up a user.
   */
  signupUser(email: string, password: string, name: string, phoneNumber: string) {
    return this.http.post('/api/auth/signup', {
      email,
      password,
      name,
      phoneNumber
    }).map((res) => {
      let registeredUser = res.json(), currentUser = new User();
      currentUser.email = registeredUser.user.username;

      this.user.next(currentUser);

      return registeredUser;
    }).catch((err) => {
      return Observable.throw(Object.assign({}, err.json(), {
        status: err.status
      }));
    });
  }

  /**
   * Responsible for confirming user registration
   * via a challenge code.
   *
   * @param confirmationCode
   * @param username
   * @returns {Observable<Response>}
   */
  confirmRegistration(confirmationCode: string, username: string) {
    return this.http.post('/api/auth/confirm', { confirmationCode, username })
  }

  /**
   * Responsible for validating a Sherlock
   * invitationId.
   *
   * @param invitationId
   * @returns {Observable<Response>}
   */
  verifyInvitationId(invitationId: string) {
    return this.http.post('/api/auth/verifyInvitation', { invitationId });
  }

  /**
   * Responsible for updating the user subject
   * from the authenticated user in localStorage.
   *
   * @param idToken
   * @private
   */
  _loadUser(idToken: string) {
    let decodedJWT = this._decodeJWT(idToken);

    const user = new User();
    user.id = decodedJWT.aud;
    user.name = decodedJWT.name;
    user.email = decodedJWT.email;
    user.timeout = decodedJWT.exp * 1000;

    this.user.next(user);
  }

  /**
   * Responsible for decoding JSON web tokens.
   *
   * @param token
   * @returns {any}
   * @private
   */
  _decodeJWT(token: string) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace('-', '+').replace('_', '/');

    return JSON.parse(window.atob(base64));
  }
}
