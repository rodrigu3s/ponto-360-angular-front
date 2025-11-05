import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseAPI, User } from '../../interfaces';
import { environment } from '../../../../environment/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_URL = `${environment.API_URL}/user`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<ResponseAPI<User[]>> {
    return this.http.get<ResponseAPI<User[]>>(this.API_URL);
  }

}
