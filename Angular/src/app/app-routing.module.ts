import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { MediaComponent } from './media/media.component';
import { RandomisorStageComponent } from './randomisor-stage/randomisor-stage.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'help', component: HelpComponent},
  {path: 'home', component: HomeComponent},
  {path: 'media', component: MediaComponent},
  {path: 'random', component: RandomisorStageComponent},
  {path: '', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
