import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  
  private userName!:string;
  private clientSecret!:'325355b7b6b330c465584f935d847237da76b4e3 ';
  private clientId!:'28efe4e40d13f467ff1d ';
  
  constructor(private http:HttpClient) { 
     

  console.log();

  this.userName='devseme';
  }
  getUserInfo(){
    return this.http.get<any[]>("${this.baseUrl}${this.userName)}",{ }).toPromise()

  }

  
}
