import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GameClientComponent } from './game-client/game-client.component';
import { GameHostComponent } from './game-host/game-host.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { MediaComponent } from './media/media.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'help', component: HelpComponent},
  {path: 'home', component: HomeComponent},
  {path: 'media', component: MediaComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'game-host', component: GameHostComponent},
  {path: 'game-client', component: GameClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
