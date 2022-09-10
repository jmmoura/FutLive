import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from 'src/model/Country';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  countries: Country[];
  RAPIDAPI_HOST = 'api-football-v1.p.rapidapi.com';
  RAPIDAPI_KEY  = '49c023ddfdmsh2813edfe3cb0c22p145fa7jsn3b15ec421c2f';
  RAPIDAPI_URL = 'https://api-football-v1.p.rapidapi.com/v3/';

  constructor(private httpClient: HttpClient) {
    this.countries = [];
    this.getCountries().subscribe(res => {
      for (const result of res.response) {
        this.countries.push(new Country(
          result.code,
          result.name,
          result.flag
        ))
      }
    });
  }

  getCountries(): Observable<any> {
    const headers = {
      'X-RapidAPI-Key': this.RAPIDAPI_KEY,
      'X-RapidAPI-Host': this.RAPIDAPI_HOST
    };
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headers)
    };

    return this.httpClient.get(this.RAPIDAPI_URL + 'countries', requestOptions);    
  }

  getLeagues(activatedCountryCode: string): Observable<any> {
    const headers = {
      'X-RapidAPI-Key': this.RAPIDAPI_KEY,
      'X-RapidAPI-Host': this.RAPIDAPI_HOST
    };
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headers),
      params: new HttpParams()
                .set('code', activatedCountryCode)
    };

    return this.httpClient.get(this.RAPIDAPI_URL + 'leagues', requestOptions);

  }

  getStandings(activatedLeagueId: number): Observable<any> {
    const headers = {
      'X-RapidAPI-Key': this.RAPIDAPI_KEY,
      'X-RapidAPI-Host': this.RAPIDAPI_HOST
    };
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headers),
      params: new HttpParams()
                .set('season', new Date().getFullYear())
                .set('league', activatedLeagueId)
    };

    return this.httpClient.get(this.RAPIDAPI_URL + 'standings', requestOptions);
  }
}
