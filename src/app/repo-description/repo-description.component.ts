import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RepositoryService} from '../repository.service';

@Component({
  selector: 'app-repo-description',
  templateUrl: './repo-description.component.html',
  styleUrls: ['./repo-description.component.css']
})
export class RepoDescriptionComponent implements OnInit {

  repoDescription: any;

  constructor(private route: ActivatedRoute, private router: Router, private rs: RepositoryService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // GET REPOSITORY BY NAME
      this.rs.getRepoByName(params.repoName).subscribe(res => {
        this.repoDescription = res;
      });
    });
  }

  redirect(repoName) {
    this.router.navigate([this.router.url + '/edit']);
  }

}
