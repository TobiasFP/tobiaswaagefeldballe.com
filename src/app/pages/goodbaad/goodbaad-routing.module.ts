import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodbaadPage } from './goodbaad.page';

const routes: Routes = [
  {
    path: '',
    component: GoodbaadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoodbaadPageRoutingModule {}
