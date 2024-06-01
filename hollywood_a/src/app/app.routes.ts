import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./feature/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },

  {
    path: 'movie/:id',
    loadComponent: () => import('./feature/add-edit-movie/add-edit-movie.component').then(m => m.AddEditMovieComponent)
  },
];
