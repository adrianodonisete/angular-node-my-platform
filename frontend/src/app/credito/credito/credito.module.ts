import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditoRoutingModule } from './credito-routing.module';
import { CreditoComponent } from './credito.component';


@NgModule({
  declarations: [CreditoComponent],
  imports: [
    CommonModule,
    CreditoRoutingModule
  ]
})
export class CreditoModule { }
