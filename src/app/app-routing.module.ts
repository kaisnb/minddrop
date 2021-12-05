import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'quick-drop',
    loadChildren: () =>
      import('./quick-drop/quick-drop.module').then((m) => m.QuickDropModule),
  },
  {
    path: 'favorties',
    loadChildren: () =>
      import('./favorties/favorties.module').then((m) => m.FavortiesModule),
  },
  {
    path: 'tree-view',
    loadChildren: () =>
      import('./tree-view/tree-view.module').then((m) => m.TreeViewModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
