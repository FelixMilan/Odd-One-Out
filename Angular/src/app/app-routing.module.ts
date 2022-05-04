import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GameComponent } from './game/game.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { MediaComponent } from './media/media.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'help', component: HelpComponent},
  {path: 'home', component: HomeComponent},
  {path: 'media', component: MediaComponent},
<<<<<<< HEAD
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'game', component: GameComponent},
  
=======
  {path: '', redirectTo: '/home', pathMatch: 'full'}
>>>>>>> 339b0bff0db6dc21cdfed6dd20c7874e3296859e
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
