import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../Interfaces/movie';
import { MovieService } from '../../services/movie-service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-movie-card',
  imports: [CommonModule, DatePipe],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard implements OnInit {

  route = inject(ActivatedRoute);
  movieService = inject(MovieService);

  movieId: number = 0;
  movie: Movie | null = null;

  inWishList: boolean = false;  
  toastMessage: string = '';         
  toastType: 'success' | 'error' = 'success';  

  ngOnInit(): void {
    this.movieId = Number(this.route.snapshot.params['id']);
    this.inWishList = !!this.movieService.wishList.find(m => m.id === this.movieId);

    this.movieService.getMovieById(this.movieId).subscribe(
      response => this.movie = response
    );
  }

  toggleWishList(movie: Movie) {
    if (!this.inWishList) {
      this.movieService.wishList.push(movie);
      this.inWishList = true;
      this.showToast('Film ajouté avec succès !', 'success');
    } else {
      this.movieService.wishList = this.movieService.wishList.filter(m => m.id !== movie.id);
      this.inWishList = false;
      this.showToast('Film retiré de la wishlist !', 'error');
    }
  }

  showToast(message: string, type: 'success' | 'error') {
    this.toastMessage = message;
    this.toastType = type;

    setTimeout(() => {
      this.toastMessage = '';
    }, 3000); 
  }

}
