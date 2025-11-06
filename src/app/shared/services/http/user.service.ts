import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseAPI, User, UserFilter } from '../../interfaces';
import { environment } from '../../../../environment/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_URL = `${environment.API_URL}`;

  constructor(private http: HttpClient) {}

  getUsers(filter: Partial<UserFilter>): Observable<ResponseAPI<User[]>> {
    let params = new HttpParams({
      fromObject: { ...filter }
    })
    return this.http.get<ResponseAPI<User[]>>(`${this.API_URL}/user`, { params });
  }

}
