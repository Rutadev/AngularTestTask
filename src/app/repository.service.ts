import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }

  getRepo() {
    return this
           .http
           .get(`http://api.github.com/orgs/octokit/repos`);
  }

  getRepoByName(name) {
    return this
            .http
            .get(`https://api.github.com/repos/octokit/${name}`);
  }
}
