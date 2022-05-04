import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DrawClientComponent } from './draw-client/draw-client.component';
import { DrawHostComponent } from './draw-host/draw-host.component';
import { GameComponent } from './game/game.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { JoinPageComponent } from './join-page/join-page.component';
import { LeaderboardClientComponent } from './leaderboard-client/leaderboard-client.component';
import { LeaderboardHostComponent } from './leaderboard-host/leaderboard-host.component';
import { LobbyPageComponent } from './lobby-page/lobby-page.component';
import { MediaComponent } from './media/media.component';
import { VoteClientComponent } from './vote-client/vote-client.component';
import { VoteDrawerComponent } from './vote-drawer/vote-drawer.component';
import { VoteHostComponent } from './vote-host/vote-host.component';
import { WritingScreenClientComponent } from './writing-screen-client/writing-screen-client.component';
import { WritingScreenHostComponent } from './writing-screen-host/writing-screen-host.component';

const ROUTES: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'help', component: HelpComponent},
  {path: 'home', component: HomeComponent},
  {path: 'media', component: MediaComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'game', 
    component: GameComponent,
    
    children: [
      {
        path: 'join-page',
        component: JoinPageComponent,
      },
      {
        path: 'lobby-page',
        component: LobbyPageComponent,
      },
      {
        path: 'writing-screen-host',
        component: WritingScreenHostComponent,
      },
      {
        path: 'draw-host',
        component: DrawHostComponent,
      },
      {
        path: 'vote-host',
        component: VoteHostComponent,
      },
      {
        path: 'leaderboard-host',
        component: LeaderboardHostComponent,
      },
      {
        path: 'writing-screen-client',
        component: WritingScreenClientComponent,
      },
      {
        path: 'draw-client',
        component: DrawClientComponent,
      },
      {
        path: 'vote-client',
        component: VoteClientComponent,
      },
      {
        path: 'vote-drawer',
        component: VoteDrawerComponent,
      },
      {
        path: 'leaderboard-client',
        component: LeaderboardClientComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
