import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { LiveMatch } from "src/model/LiveMatch";
import { Team } from 'src/model/Team';

@Injectable({
  providedIn: 'root'
})
export class LiveMatchesService {
  liveMatchesMap: Map<string, LiveMatch>;
  RAPIDAPI_HOST = 'api-football-v1.p.rapidapi.com';
  RAPIDAPI_KEY  = environment.rapidApiKey;
  RAPIDAPI_URL = 'https://api-football-v1.p.rapidapi.com/v3/';

  constructor(private httpClient: HttpClient) {
    this.liveMatchesMap = new Map();
    this.getLiveMatches().subscribe(res => this.setLiveMatches(res));
    interval(60*1000).pipe(
        mergeMap(() => this.getLiveMatches())
      ).subscribe(res => this.setLiveMatches(res));
  }

  getLiveMatches(): Observable<any> {
    const headers = {
      'X-RapidAPI-Key': this.RAPIDAPI_KEY,
      'X-RapidAPI-Host': this.RAPIDAPI_HOST
    };
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headers),
      params: new HttpParams().set('live', 'all')
    };

    return this.httpClient.get(this.RAPIDAPI_URL + 'fixtures', requestOptions);
  }

  setLiveMatches(res: any): void {
    for (const result of res.response) {
      if (!this.liveMatchesMap) {
        this.liveMatchesMap = new Map();
      }
      this.liveMatchesMap.set(result.fixture.id, new LiveMatch(
        result.fixture.id,
        result.fixture.status.elapsed,
        new Team(result.teams.home.id,
                  result.teams.home.name,
                  result.teams.home.logo),
        new Team(result.teams.away.id,
                  result.teams.away.name,
                  result.teams.away.logo),
        result.goals.home,
        result.goals.away,
        result.league.name,
        result.league.logo
      ));
    }
    if (res.response.length === 0) {
      this.liveMatchesMap = null;
    }
  }
}