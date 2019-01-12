import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.storage.get('auth-token').then(res => {
        console.log('appComponent: Token: ' + res);
      });
      console.log('appComponent: State: ' + this.authService.authenticationState.value);

      this.authService.authenticationState.subscribe((state) => {
        if (state) {
          console.log('appComponent: auth changed: ' + state);
        } else {
          console.log('appcomponent: auth denied');
        }
      });
    });
  }
}
