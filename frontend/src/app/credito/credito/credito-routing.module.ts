import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditoComponent } from './credito.component';

const routes: Routes = [{ path: '', component: CreditoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditoRoutingModule { }
