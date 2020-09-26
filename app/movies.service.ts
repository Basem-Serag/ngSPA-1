import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  getTrending(mediaType):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=3e0d377b6b11bdcbd8bad9d98e004d31`);
  }

  getDetails(mediaType , id):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=3e0d377b6b11bdcbd8bad9d98e004d31&language=en-US`)
  }

  getAllMovies(mediaType):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/popular?api_key=3e0d377b6b11bdcbd8bad9d98e004d31&language=en-US&page=1`)
  }

  getAllPeople():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/person/popular?api_key=3e0d377b6b11bdcbd8bad9d98e004d31&language=en-US&page=4');

  }
}


