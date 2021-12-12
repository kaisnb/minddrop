import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MaterialModule } from '../shared-components/material/material.module';
import { TreeViewRoutingModule } from './tree-view-routing.module';
import { TreeViewComponent } from './tree-view.component';

@NgModule({
  declarations: [TreeViewComponent],
  imports: [
    CommonModule,
    TreeViewRoutingModule,
    MatTreeModule,
    MatAutocompleteModule,
    MaterialModule,
  ],
})
export class TreeViewModule {}
