import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuickDropRoutingModule } from './quick-drop-routing.module';
import { QuickDropComponent } from './quick-drop.component';

@NgModule({
  declarations: [QuickDropComponent],
  imports: [CommonModule, QuickDropRoutingModule],
})
export class QuickDropModule {}
