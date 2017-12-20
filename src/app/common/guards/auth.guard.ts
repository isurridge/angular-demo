import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LOGIN_URL, CURRENT_AUTH_KEY } from '../services/auth.service';
import { LocalStorageService } from '../services/local-storage.service';

/**
 * The AuthGuard checks local storage for a `currentUser` object
 * and if it is not present directs the user to the login screen.
 */
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.localStorageService.get(CURRENT_AUTH_KEY)) {
      return true;
    }

    this.router.navigate([LOGIN_URL]);
    return false;
  }
}
