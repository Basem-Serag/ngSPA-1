import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { AuthGuard } from './auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'about', canActivate: [AuthGuard], component: AboutComponent },
  { path: 'movies', canActivate: [AuthGuard], component: MoviesComponent },
  { path: 'tv', canActivate: [AuthGuard], component: TvshowComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'people', canActivate: [AuthGuard], component: PeopleComponent },
  { path: 'movieDetails/:type/:id' , canActivate: [AuthGuard] , component:MoviesDetailsComponent},
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
