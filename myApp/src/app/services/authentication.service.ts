import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { LoginPage } from '../public/login/login.page';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, private platform: Platform) {
    this.platform.ready().then(() => {

      console.log('authservice: enter ctor');
      this.checkToken();
    });
  }

  login() {

    console.log('authservice: enter login');

    this.storage.get(TOKEN_KEY).then(res => {
      console.log('authservice: Token: ' + res);
    });
    console.log('authservice: State: ' + this.authenticationState.value);

    console.log('authservice: set token');
    return this.storage.set(TOKEN_KEY, 'Bearer 123123').then(res => {

      this.authenticationState.next(true);

      this.storage.get(TOKEN_KEY).then(tok => {
        console.log('authservice: Token: ' + tok);
      });
      console.log('authservice: State: ' + this.authenticationState.value);
    });
  }

  logout() {
    console.log('authservice: enter logout');

    this.storage.get(TOKEN_KEY).then(res => {
      console.log('authservice: Token: ' + res);
    });
    console.log('authservice: State: ' + this.authenticationState.value);

    return this.storage.remove(TOKEN_KEY).then(() => {

      this.authenticationState.next(false);

      this.storage.get(TOKEN_KEY).then(res => {
        console.log('authservice: Token: ' + res);
      });
      console.log('authservice: State: ' + this.authenticationState.value);
    });
  }

  isAuthenticated(): boolean {
    console.log('authservice: enter isAuthenticated');

    this.storage.get(TOKEN_KEY).then(res => {
      console.log('authservice: Token: ' + res);
    });
    console.log('authservice: State: ' + this.authenticationState.value);

    return this.authenticationState.value;
  }

  checkToken() {
    console.log('authservice: enter checkToken');

    this.storage.get(TOKEN_KEY).then(res => {
      console.log('authservice: Token: ' + res);
    });
    console.log('authservice: State: ' + this.authenticationState.value);

    return this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        // check if token is valid, exired, send it to the backend, etc.

        // default authenticated
        console.log('authservice: token found');
        this.authenticationState.next(true);
      } else {
        console.log('authservice: token not found');
      }
    });
  }

}
