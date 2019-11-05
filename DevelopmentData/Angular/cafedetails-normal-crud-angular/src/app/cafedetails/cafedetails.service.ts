import { Injectable } from '@angular/core';
import { CafeDetails } from '../model/cafedetails.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CafedetailsService {

  cafe:CafeDetails[]=[];

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(public http:HttpClient) { }

  saveCafe(cafedetails:CafeDetails) {
    return this.http.post<CafeDetails>("http://localhost:8880/cafedetails/add", cafedetails);
  }

  searchCafe(id:number):Observable<CafeDetails> {
    return this.http.get<CafeDetails>("http://localhost:8880/cafedetails/" + id).pipe(retry(1), catchError(this.errorHandler));
  }

  listCafe():Observable<CafeDetails[]> {
    return this.http.get<CafeDetails[]>("http://localhost:8880/cafedetails/fetchAllCafe");
  }

  deleteCafe(id:number):Observable<boolean> {
    return this.http.delete<boolean>("http://localhost:8880/cafedetails/remove/" + id);
  }



  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) { //client side error
      errorMessage = `Error: ${error.error.message}`;
    }
    else { //server side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.error}`;
    }
    window.alert(errorMessage);
    return throwError(error.error)
  }


}
