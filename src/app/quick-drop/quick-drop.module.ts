import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared-components/material/material.module';
import { QuickDropRoutingModule } from './quick-drop-routing.module';
import { QuickDropComponent } from './quick-drop.component';

@NgModule({
  declarations: [QuickDropComponent],
  imports: [CommonModule, QuickDropRoutingModule, MaterialModule],
})
export class QuickDropModule {}
