import { Component, OnInit } from '@angular/core';
import { FieldsService } from '../services/fields.service';

@Component({
  selector: 'app-field-detail',
  templateUrl: './field-detail.page.html',
  styleUrls: ['./field-detail.page.scss'],
})
export class FieldDetailPage implements OnInit {

  field: any = {};

  constructor(private fieldsService: FieldsService) { }

  ngOnInit() {
    this.field = this.fieldsService.selectedField;
  }

}
