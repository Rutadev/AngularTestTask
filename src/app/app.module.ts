import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RepositoryService } from './repository.service';
import { RepoListComponent } from './repo-list/repo-list.component';
import { RepoDescriptionComponent } from './repo-description/repo-description.component';
import { RepoEditComponent } from './repo-edit/repo-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoListComponent,
    RepoDescriptionComponent,
    RepoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
