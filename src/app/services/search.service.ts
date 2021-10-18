import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
   private repoName!:string;
  private MainUrl=environment.userUrl;
  private userName!:string;
  private clientSecret!:'325355b7b6b330c465584f935d847237da76b4e3 ';
  private clientId!:'28efe4e40d13f467ff1d ';
  
  constructor(private http:HttpClient) {  }

  getUserInfo(){
    return this.http.get<any[]>(`${this.MainUrl}${this.userName}?client_id= + ${this.clientId}
     +&client_secret=+ ${this.clientSecret}`,{ }).toPromise()

  }

  getUserName(userNames:string){
    this.userName =userNames;
  }
  getUserRepositories(){
    return this.http.get<any[]>(`${this.MainUrl}${this.userName}/repos`).toPromise();

  }
  updateRepos(repos:string){
    return this.repoName =repos;
  }
 
  
}
