import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavortiesRoutingModule } from './favorties-routing.module';
import { FavortiesComponent } from './favorties.component';

@NgModule({
  declarations: [FavortiesComponent],
  imports: [CommonModule, FavortiesRoutingModule],
})
export class FavortiesModule {}
