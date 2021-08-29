import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpeedtestPageRoutingModule } from './speedtest-routing.module';

import { SpeedtestPage } from './speedtest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpeedtestPageRoutingModule
  ],
  declarations: [SpeedtestPage]
})
export class SpeedtestPageModule {}
