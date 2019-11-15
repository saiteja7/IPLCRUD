import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './nav/header/header.component';
import { FooterComponent } from './nav/footer/footer.component';
import { TeamsListComponent } from './teams/teams-list/teams-list.component';
import { AddTeamsComponent } from './teams/add-teams/add-teams.component';
import { DashboardDockComponent } from './teams/dashboard-dock/dashboard-dock.component';
import { PlayersListComponent } from './players/players-list/players-list.component';
import { AddPlayerComponent } from './players/add-player/add-player.component';
import { ROUTES, Router, RouterModule, Routes } from '@angular/router';
import { TeamDetailsComponent } from './teams/team-details/team-details.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { TeamsService } from './services/teams.service';
import { PlayersService } from './services/players.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TeamsListComponent,
    AddTeamsComponent,
    DashboardDockComponent,
    PlayersListComponent,
    AddPlayerComponent,
    TeamDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Angular2FontawesomeModule

  ],
  providers: [TeamsService, PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
