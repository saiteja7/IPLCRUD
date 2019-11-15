import { Component } from '@angular/core';
import { TeamsService } from './services/teams.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private teamsS: TeamsService) {
    this.teamsS.getTeams();
  }
  title = 'IPL-CLIENT';
}
