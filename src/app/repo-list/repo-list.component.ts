import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {

  repoList: any;
  constructor(private rs: RepositoryService) { }

  ngOnInit() {
    // GET LIST OF REPOSITORY
     this.rs
     .getRepo()
     .subscribe((data: any) => {debugger
     this.repoList = data;
     });
  }

}
