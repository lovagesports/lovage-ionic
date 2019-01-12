import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public auth: AuthenticationService, public router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    console.log('authguard: entered canActivate');
    if (!this.auth.isAuthenticated()) {

      console.log('authguard: is ! authenticated');
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }

    console.log('authguard: is authenticated');
    return true;
  }
}
