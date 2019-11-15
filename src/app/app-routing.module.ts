import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersListComponent } from './players/players-list/players-list.component';
import { AddPlayerComponent } from './players/add-player/add-player.component';
import { AddTeamsComponent } from './teams/add-teams/add-teams.component';
import { TeamsListComponent } from './teams/teams-list/teams-list.component';
import { TeamDetailsComponent } from './teams/team-details/team-details.component';


const routes: Routes = [
  { path: 'players', component: PlayersListComponent },

  { path: 'players/add', component: AddPlayerComponent },
  {
    path: 'teams', component: TeamsListComponent, children: [
      { path: ':id/:name', component: TeamDetailsComponent },
      { path: 'add', component: AddTeamsComponent },
      { path: ':edit/:id', component: AddTeamsComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
