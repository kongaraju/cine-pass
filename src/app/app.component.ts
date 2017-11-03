import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String;
  videos: any[];
  searchTerm: String;
  movieService;
  pages: any[];
  ngOnInit(): void {
    this.navigate(1);
  }
  constructor(movieService: MovieService) {
    this.movieService = movieService;
    this.search = this.search.bind(this);
  }
  navigate(pageNumber: number): void {
    this.movieService.getMovies(pageNumber).then((page) => {
      this.title = page.title;
      this.videos = page["content-items"].content;
    });
  }
  search(text$: Observable<string>) {
    let self = this;
    return text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : self.getMoviesByTitle(term).slice(0, 10));
  }
  getMoviesByTitle(term: String): any[] {
    return this.movieService.getMoviesByTitle(term);
  }
}
