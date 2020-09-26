import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  peoples:any[];
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {

    this._MoviesService.getAllPeople().subscribe((data)=>{
      this.peoples = data.results.slice(0,18);
    })

  }

}
