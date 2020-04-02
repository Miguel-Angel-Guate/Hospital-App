import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  public appointments: object[];
  constructor(public httpClient:HttpClient) { }
  getAll():Observable<any>{
    return this.httpClient.get('http://localhost:3000/appointments');

  }
  setAppointments(appointments):void{
    this.appointments=appointments;
  }
  search(searchValue){
    return this.httpClient.get('http://localhost:3000/appointments/name/'+searchValue);
  }
}
