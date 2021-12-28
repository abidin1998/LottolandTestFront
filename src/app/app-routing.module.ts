import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { IdentificationViewComponent } from './identification-view/identification-view.component';
import { StatisticsViewComponent } from './statistics-view/statistics-view.component';
const routes: Routes = [
  
  {
    path : 'profile',
    component: ProfileViewComponent
  },
  {
    path :'identification',
    component: IdentificationViewComponent
  },
  {
    path :'statistics',
    component: StatisticsViewComponent
  },
  {
    path :"**",redirectTo :'identification'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
