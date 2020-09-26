import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { PeopleComponent } from './people/people.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    NavbarComponent,
    MoviesComponent,
    MoviesDetailsComponent,
    PeopleComponent,
    NotfoundComponent,
    TvshowComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
