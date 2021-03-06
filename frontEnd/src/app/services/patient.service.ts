import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  public patients: object[];


  constructor(public httpClient: HttpClient) { }
  getAll():Observable<any>{
    return this.httpClient.get('/patients');
  }
  setPatients(patients):void{
    this.patients=patients;
  }
  search(searchValue){
    return this.httpClient.get('/patients/name/'+searchValue);
  }
}
