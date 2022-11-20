import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OilBaseComponent } from './oil/oil-base/oil-base.component';

const routes: Routes = [

  { path: 'oilbase', component: OilBaseComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
