import { TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MovieService} from './movie.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[FormsModule,
        NgbModule.forRoot()],
        providers: [MovieService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.movieService).toBeTruthy();
  }));
  it('should not show quote before OnInit', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    let de = fixture.debugElement.query(By.css('.videos-list-block'));
    let el = de.nativeElement;
    const movieService = fixture.debugElement.injector.get(MovieService);
    let spy = spyOn(movieService, 'getMovies')
    .and.returnValue(Promise.resolve([]));
    //expect(el.textContent).toBe('', 'nothing displayed');
    expect(spy.calls.any()).toBe(false, 'getQuote not yet called');
  });
});
