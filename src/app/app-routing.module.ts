import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoDescriptionComponent } from './repo-description/repo-description.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { RepoEditComponent } from './repo-edit/repo-edit.component';

const routes: Routes = [
  {
    path: 'repo',
    component: RepoListComponent
  },
  {
    path: 'repo/:repoName',
    component: RepoDescriptionComponent
  },
  {
    path: 'repo/:repoName/edit',
    component: RepoEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
