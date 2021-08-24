import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelliePageRoutingModule } from './tellie-routing.module';

import { TelliePage } from './tellie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelliePageRoutingModule
  ],
  declarations: [TelliePage]
})
export class TelliePageModule {}
