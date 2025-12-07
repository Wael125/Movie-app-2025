import { Routes } from '@angular/router';
import { MovieList } from './components/movie-list/movie-list';
import { MovieCard } from './components/movie-card/movie-card';
import { WishList } from './components/wish-list/wish-list';

export const routes: Routes = [
    {path:'', component:MovieList},
    {path:'wishlist', component:WishList},
    {path:':id', component:MovieCard},
    {path:'**', component:MovieList}
];
