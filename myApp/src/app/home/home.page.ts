import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { FieldsService } from '../services/fields.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  fields: any[] = [];

  constructor(private router: Router, private authService: AuthenticationService, private fieldsService: FieldsService) { }

  load() {
    this.fieldsService.getFields().subscribe((response: any) => {
      this.fields = response;
    });
  }

  showDetail(field: any) {
    this.fieldsService.selectedField = field;
    this.router.navigate(['/field-detail']);
  }

  logout() {
    console.log('homepage logout');
    this.authService.logout();
  }
}
