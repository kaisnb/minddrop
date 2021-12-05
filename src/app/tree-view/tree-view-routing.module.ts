import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeViewComponent } from './tree-view.component';

const routes: Routes = [{ path: '', component: TreeViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreeViewRoutingModule {}
