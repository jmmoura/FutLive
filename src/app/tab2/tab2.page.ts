import { Component, Input } from '@angular/core';

import { Country } from 'src/model/Country';
import { League } from 'src/model/League';
import { Standings } from 'src/model/Standings';
import { Team } from 'src/model/Team';
import { LeagueService } from '../services/league.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  countries: Country[];
  leagues: League[];
  standings: Standings[];
  group: string;

  constructor(private leagueSvc: LeagueService) {
    this.countries = leagueSvc.countries;
  }

  setLeagues(e: any) {
    this.leagues = [];
    this.leagueSvc.getLeagues(e.detail.value).subscribe(res => {
      for (const result of res.response) {
        this.leagues.push(new League(
          result.league.id,
          result.league.name,
          result.league.logo,
          result.type,
          e.detail.value
        ))
      }
    })
  }

  setStandings(e: any) {
    this.standings = [];
    this.leagueSvc.getStandings(e.detail.value).subscribe(res => {
      if (res.response.length === 0) {
        this.standings = null;
        return;
      }
      const league = res.response[0].league;
      const [ standings ] = league.standings;
      this.group = standings[0].group;
      for (const teamStats of standings) {
        this.standings.push(new Standings(
          league.id,
          league.season,
          new Team(teamStats.team.id,
                   teamStats.team.name,
                   teamStats.team.logo),
          teamStats.rank,
          teamStats.points,
          teamStats.goalsDiff,
          teamStats.all.played,
          teamStats.all.win,
          teamStats.all.draw,
          teamStats.all.lose,
          teamStats.all.goals.for,
          teamStats.all.goals.against
        ))
      }
    })
  }
}
