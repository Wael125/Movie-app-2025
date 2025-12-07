import { HttpClient } from '@angular/common/http';
import { inject,Injectable } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import { Movie} from '../Interfaces/movie';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  
  private http=inject(HttpClient)
  private apiKey=environment.apiKey
  public wishList:Movie[]=[]
  public movieList:Movie[]=[]
  getMovieList():Observable<Movie[]>{
    return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}`).pipe(map((Response:any)=>Response.results))
  }
  getMovieById(id:number):Observable<Movie>{
    return this.http.
    get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`).pipe(
      map((Response:any)=>Response)
    )
  }
}
