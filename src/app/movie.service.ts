import page1 from '../assets/API/CONTENTLISTINGPAGE-PAGE1.json';
import page2 from '../assets/API/CONTENTLISTINGPAGE-PAGE2.json';
import page3 from '../assets/API/CONTENTLISTINGPAGE-PAGE3.json';
export class MovieService {
    pages=[page1,page2, page3];
    getMovies(pageNumber:number){
        return Promise.resolve(this.pages[pageNumber-1]["page"]);
    }
    getMoviesByTitle(term: String): any[] {
        let allMovies = this.getAllMovies();
        return allMovies.filter(movie => movie.name.toLowerCase().includes(term.toLowerCase()));//.map(movie => movie.name);
    }
    getAllMovies():any[]{
        return [].concat.apply([], this.pages.map(item => item["page"]["content-items"].content));
    }
}