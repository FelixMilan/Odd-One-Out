import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { MediaComponent } from './media/media.component';
import { LobbyPageComponent } from './lobby-page/lobby-page.component';
import { RandomisorStageComponent } from './randomisor-stage/randomisor-stage.component';
import { DrawStageComponent } from './draw-stage/draw-stage.component';
import { VoteStageComponent } from './vote-stage/vote-stage.component';
import { JoinPageComponent } from './join-page/join-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HelpComponent,
    MediaComponent,
    LobbyPageComponent,
    RandomisorStageComponent,
    DrawStageComponent,
    VoteStageComponent,
    JoinPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
