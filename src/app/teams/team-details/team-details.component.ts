import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/Model/team';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
  team: Team;
  id: number;
  name: string;

  constructor(
    private teamService: TeamsService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.id = params['id'];
      // tslint:disable-next-line: no-string-literal
      this.name = params['name'];
      console.log(this.id, this.name);

      this.team = this.teamService.getTeam(this.id);
      console.log(this.team);
    });
  }
}
