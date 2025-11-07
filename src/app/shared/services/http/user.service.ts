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
  private readonly CONTEXT_PATH  = '/users'

  constructor(private http: HttpClient) {}

  getUsers(filter: Partial<UserFilter>): Observable<ResponseAPI<User[]>> {
    let params = new HttpParams({
      fromObject: { ...filter }
    })
    return this.http.get<ResponseAPI<User[]>>(`${this.API_URL}${this.CONTEXT_PATH}`, { params });
  }

  getUserById(id: string):Observable<ResponseAPI<User>> {
    return this.http.get<ResponseAPI<User>>(`${this.API_URL}${this.CONTEXT_PATH}/${id}`);
  }

  sendUsers(params: Partial<User>): Observable<ResponseAPI<User[]>> {
    return this.http.post<ResponseAPI<User[]>>(`${this.API_URL}${this.CONTEXT_PATH}`, params);
  }

  deleteUser(id: string): Observable<void>{
    return this.http.delete<void>(`${this.API_URL}${this.CONTEXT_PATH}/${id}`)
  }

  putUserById(id: string, params: User):Observable<ResponseAPI<User>> {
    return this.http.put<ResponseAPI<User>>(`${this.API_URL}${this.CONTEXT_PATH}/${id}`, params)
  }
}
