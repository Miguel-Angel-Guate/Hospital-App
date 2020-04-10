import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhysicianService {
  public physicians: object[];
  constructor(public httpClient:HttpClient) { }
  getAll():Observable<any>{
    return this.httpClient.get('/physicians');
  }
  setPhysicians(physicians):void{
    this.physicians=physicians;
  }
  search(searchValue){
    return this.httpClient.get('/physicians/name/'+searchValue);
  }

}
