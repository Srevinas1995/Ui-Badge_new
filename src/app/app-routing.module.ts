import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelComponent } from './component/travel/travel.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  { path: 'travel', component: TravelComponent },
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
