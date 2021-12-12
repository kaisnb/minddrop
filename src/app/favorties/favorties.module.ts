import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared-components/material/material.module';
import { FavortiesRoutingModule } from './favorties-routing.module';
import { FavortiesComponent } from './favorties.component';

@NgModule({
  declarations: [FavortiesComponent],
  imports: [CommonModule, MaterialModule, FavortiesRoutingModule],
})
export class FavortiesModule {}
