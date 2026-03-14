import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./feature/page/character-list/character-list').then(
        (m) => m.CharacterList
      )
  },
  {
    path: 'character/:id',
    loadComponent: () =>
      import('./feature/page/character-detail/character-detail').then(
        (m) => m.CharacterDetail
      )
  }
];
