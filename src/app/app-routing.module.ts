import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdjustComponent } from './components/adjust/adjust.component';
import { OutfitComponent } from './components/outfit/outfit.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { GetOutfitsByUserComponent } from './components/get-outfits-by-user/get-outfits-by-user.component';
  
  const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:"full"},
    {path:"home", component:HomeComponent},
    {path:"current-weather/:id", component:HomeComponent, canActivate: [AuthGuard]},
    {path:"outfit/:id",component:OutfitComponent, canActivate: [AuthGuard]},
    {path:"adjust/:id",component:AdjustComponent, canActivate: [AuthGuard]},
    {path:"userOutfits",component:GetOutfitsByUserComponent, canActivate: [AuthGuard]}      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

