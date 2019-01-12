import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FieldsService {

  selectedField: any = {};

  constructor(private http: HttpClient) { }

  getFields(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // tslint:disable-next-line:max-line-length
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aXJhZ19pQHlhaG9vLmNvbSIsInJvbGVzIjpbeyJpZCI6IjVjMjJiODEwMWM5ZDQ0MDAwMDA3NDBiZSIsInJvbGUiOiJST0xFX1VTRVIifV0sImlhdCI6MTU0NzI3ODE5MSwiZXhwIjoxNTQ3MzY0NTkxfQ.fnPUkC3wTYG5NuHIfsljJoSzxF8jOSo4L1FoFK9XRkE'
      })
    };


    return this.http.get('http://172.30.176.1:8080/api/auth/fields', httpOptions);
  }
}
