import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcNotasPageRoutingModule } from './calc-notas-routing.module';

import { CalcNotasPage } from './calc-notas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcNotasPageRoutingModule
  ],
  declarations: [CalcNotasPage]
})
export class CalcNotasPageModule {}
