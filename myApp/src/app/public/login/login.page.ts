import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  login() {

    console.log('loginPage login');

    this.authService.login();

    this.route.queryParams.subscribe(
      params => {
        console.log('loginPage navigating to ' + params['returnUrl']);
        this.router.navigate([params['returnUrl']]);
      }
    );
  }
}
