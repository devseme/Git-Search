import { Component, OnInit } from '@angular/core';

import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   repos!:any;
    myProfile!:any;
    userName:string='';
  constructor( private searchService:SearchService) { 
    
  }
  searchProfile(){ 
    this.searchService.getUserName(this.userName)
    this.searchService.getUserInfo().then(profile =>{
    this.myProfile=profile;
  }).catch((err)=>{
    console.log(err)
  });
  
  }

  ngOnInit(): void {
    this.searchProfile();

  }

}
