import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environment/environment.development';
import { Observable } from 'rxjs';
import { ClockIn, ResponseAPI } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClockInService {

  private readonly API_URL = `${environment.API_URL}`;
  private readonly CONTEXT_PATH  = '/timeclocks'

  constructor(private http: HttpClient) {}

  sendClockIn(params: ClockIn): Observable<ResponseAPI<any>> {
    return this.http.post<ResponseAPI<any>>(`${this.API_URL}${this.CONTEXT_PATH}`, params);
  }


}
