import { Component,inject, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { Movie } from '../../Interfaces/movie';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-list',
  imports: [],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList implements OnInit{
  movieList:Movie[]=[]
  movieService=inject(MovieService)
  router=inject(Router)
  ngOnInit(): void {
    this.movieService.getMovieList().subscribe(
      Response=>this.movieService.movieList=Response
    )
  }
  navigateTo(id:number){
this.router.navigate(['', id])
  }

}
