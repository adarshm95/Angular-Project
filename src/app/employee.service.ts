import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl= 'http://localhost:57312/api';

  constructor(private http: HttpClient) { }
  

getEmployeeList(): Observable<any>{
  return this.http.get(this.baseUrl+'/Employee');
}

getCategoryList(): Observable<any>{
  return this.http.get(this.baseUrl+'/Category');
}

getCategory(id: number): Observable<any>{
  return this.http.get(this.baseUrl+'/Category/'+id);
}

getEmployee(id: number): Observable<any>{
  return this.http.get(this.baseUrl+'/Employee/'+id);
}

deleteEmployee(id: number): Observable<any>{
  return this.http.delete(this.baseUrl+'/Employee/'+id);

}



}
