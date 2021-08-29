import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoodbaadPageRoutingModule } from './goodbaad-routing.module';

import { GoodbaadPage } from './goodbaad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoodbaadPageRoutingModule
  ],
  declarations: [GoodbaadPage]
})
export class GoodbaadPageModule {}
