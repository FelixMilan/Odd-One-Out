import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { MediaComponent } from './media/media.component';
import { LobbyPageComponent } from './lobby-page/lobby-page.component';
import { JoinPageComponent } from './join-page/join-page.component';
import { GameComponent } from './game/game.component';
import { VoteClientComponent } from './vote-client/vote-client.component';
import { VoteHostComponent } from './vote-host/vote-host.component';
import { DrawClientComponent } from './draw-client/draw-client.component';
import { DrawHostComponent } from './draw-host/draw-host.component';
import { LeaderboardHostComponent } from './leaderboard-host/leaderboard-host.component';
import { LeaderboardClientComponent } from './leaderboard-client/leaderboard-client.component';
import { WritingScreenClientComponent } from './writing-screen-client/writing-screen-client.component';
import { WritingScreenHostComponent } from './writing-screen-host/writing-screen-host.component';
import { VoteDrawerComponent } from './vote-drawer/vote-drawer.component';
import { DrawingCanvasComponent } from './drawing-canvas/drawing-canvas.component';
import { SignaturePadModule } from 'angular2-signaturepad';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HelpComponent,
    MediaComponent,
    LobbyPageComponent,
    JoinPageComponent,
    GameComponent,
    VoteClientComponent,
    VoteHostComponent,
    DrawClientComponent,
    DrawHostComponent,
    LeaderboardHostComponent,
    LeaderboardClientComponent,
    WritingScreenClientComponent,
    WritingScreenHostComponent,
    VoteDrawerComponent,
    DrawingCanvasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignaturePadModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
