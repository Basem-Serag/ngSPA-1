import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvshowComponent implements OnInit {

  allTvShow: any[];
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _MoviesService: MoviesService) { }

  ngOnInit(): void {

    this._MoviesService.getAllMovies('tv').subscribe((data) => {
      this.allTvShow = data.results;
    })

  }

}
