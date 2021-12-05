import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuickDropComponent } from './quick-drop.component';

const routes: Routes = [{ path: '', component: QuickDropComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuickDropRoutingModule {}
