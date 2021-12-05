import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavortiesComponent } from './favorties.component';

const routes: Routes = [{ path: '', component: FavortiesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavortiesRoutingModule {}
