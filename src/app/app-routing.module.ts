import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryComponent } from './repository/repository.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   { path: 'home', component: HomeComponent},
  { path: 'users', component: UserComponent},
  { path: 'repositories', component: RepositoryComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
