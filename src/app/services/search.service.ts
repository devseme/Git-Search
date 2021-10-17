import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  
  private userName!:string;
  private secret!:'';
  private id!:'86242350';
  constructor(private http:HttpClient) { 
     

  console.log('It Generates successfully');

  this.userName='devseme';
  }
  getUserInfo(){
    return this.http.get("");
  }

  
}
