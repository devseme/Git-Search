import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
 
  repositories! :any;
  userName :string =''
 
  constructor(private searchService:SearchService) { }

  getUserRepositories(){
    this.searchService.getUserName(this.userName);
    this.searchService.getUserRepositories().then( repos => {
      this.repositories = repos;
    })
  }
  ngOnInit(): void {
    this.getUserRepositories();
  }

}
