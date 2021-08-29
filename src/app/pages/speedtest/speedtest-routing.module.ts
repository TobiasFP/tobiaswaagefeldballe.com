import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeedtestPage } from './speedtest.page';

const routes: Routes = [
  {
    path: '',
    component: SpeedtestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeedtestPageRoutingModule {}
