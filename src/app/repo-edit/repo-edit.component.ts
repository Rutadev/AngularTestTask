import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {RepositoryService} from '../repository.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-repo-edit',
  templateUrl: './repo-edit.component.html',
  styleUrls: ['./repo-edit.component.css']
})
export class RepoEditComponent implements OnInit {

  repository: any;
  repoForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private rs: RepositoryService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // EDIT REPOSITORY
      this.rs.getRepoByName(params.repoName).subscribe((res: any) => {
        debugger
        this.repoForm = this.fb.group({
          RepoName: [res.name, Validators.required],
          RepoDescription: [res.description, Validators.required]
        });
      });
    });
  }

  addRepository(RepoName, RepoDescription) {
    alert('Your repo ' + RepoName + ' will be updated soon!');
    this.router.navigate(['repo']);
  }

}
