import { Injectable } from '@angular/core';
import { Team } from '../Model/team';
import { Data } from '../Model/data';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  data: Data = new Data();
  teams: Team[] = [];

  constructor() {
    this.data.rcb.players = [this.data.ABD, this.data.virat];
    this.teams = [this.data.csk, this.data.rcb];
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {}
  getTeams() {
    return this.teams;
  }
  getTeam(id: number): Team {
    let t: Team;
    this.teams.forEach(team => {
      // tslint:disable-next-line: triple-equals
      if (team.id == id) {
        t = team;
      }
    });
    return t;
  }
}
