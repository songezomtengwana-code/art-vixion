import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { CrewComponent } from './pages/crew/crew.component';

const routes: Routes = [
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: LandingComponent },
  { path: 'crew', component: CrewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
