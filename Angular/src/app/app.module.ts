import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
