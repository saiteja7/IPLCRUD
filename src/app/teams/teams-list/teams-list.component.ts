import { RouterModule, Router } from '@angular/router';
// tslint:disable-next-line: quotemark
import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line: quotemark
import { TeamsService } from 'src/app/services/teams.service';
// tslint:disable-next-line: quotemark
import { Team } from 'src/app/Model/team';

@Component({
  // tslint:disable-next-line: quotemark
  selector: 'app-teams-list',
  // tslint:disable-next-line: quotemark
  templateUrl: './teams-list.component.html',
  // tslint:disable-next-line: quotemark
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {
  teams: Team[];

  constructor(private teamService: TeamsService, private router: Router) {}

  ngOnInit() {
    this.teams = this.teamService.getTeams();
  }
  deleteTeam(team: Team) {}
  editTeam(team: Team) {
    // tslint:disable-next-line: quotemark
    console.log(team);
    this.router.navigate(['/teams/edit', team.id, team.team]);
  }
  teamDetails(team: Team) {
    // tslint:disable-next-line: quotemark
    this.router.navigate(['/teams', team.id, team.team]);
  }
}
