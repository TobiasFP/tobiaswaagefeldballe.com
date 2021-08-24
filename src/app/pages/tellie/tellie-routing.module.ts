import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelliePage } from './tellie.page';

const routes: Routes = [
  {
    path: '',
    component: TelliePage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelliePageRoutingModule {}
