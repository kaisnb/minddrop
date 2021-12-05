import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeViewRoutingModule } from './tree-view-routing.module';
import { TreeViewComponent } from './tree-view.component';

@NgModule({
  declarations: [TreeViewComponent],
  imports: [CommonModule, TreeViewRoutingModule],
})
export class TreeViewModule {}
