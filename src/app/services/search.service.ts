import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
   private repoName!:string;
  private MainUrl=environment.userUrl;
  private tokens = environment.accessToken
  private userName!:string;

  
  constructor(private http:HttpClient) {  }

  getUserInfo(){
    return this.http.get<any[]>(`${this.MainUrl}${this.userName}??access_token=+${this.tokens}`).toPromise()

  }

  getUserName(userNames:string){
    this.userName =userNames;
  }
  getUserRepositories(){
    return this.http.get<any[]>(`${this.MainUrl}${this.userName}/repos??access_token=+${this.tokens}`).toPromise();
    
  
  }
  updateRepos(repos:string){
    return this.repoName =repos;
  }
 
  
}
