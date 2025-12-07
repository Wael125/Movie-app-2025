import { Component, inject } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { Router } from '@angular/router';
import { Movie } from '../../Interfaces/movie';

@Component({
  selector: 'app-wish-list',
  imports: [],
  templateUrl: './wish-list.html',
  styleUrl: './wish-list.css',
})
export class WishList {
movieService=inject(MovieService)
router=inject(Router) 
navigateTo(id:number){
this.router.navigate(['', id])
  }
  wishList: Movie[] = [];

add(movie: Movie) {
  if (!this.isMovieInWishList(movie.id)) {
    this.wishList.push(movie);
  }
}

remove(id: number) {
  this.wishList = this.wishList.filter(m => m.id !== id);
}

isMovieInWishList(id: number) {
  return this.wishList.some(m => m.id === id);
}
}
