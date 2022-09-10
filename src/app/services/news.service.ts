import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { News } from 'src/model/News';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  latestNews: News[];
  RAPIDAPI_HOST = 'google-search3.p.rapidapi.com';
  RAPIDAPI_KEY  = '49c023ddfdmsh2813edfe3cb0c22p145fa7jsn3b15ec421c2f';
  RAPIDAPI_URL = 'https://google-search3.p.rapidapi.com/api/v1/search/';
  X_USER_AGENT = 'mobile';
  X_PROXY_LOCATION = 'BR';

  constructor(private httpClient: HttpClient) {
    this.latestNews = [];
    this.getLatestNews().subscribe(res => {
      for (const result of res.results) {
        this.latestNews.push(new News(
          result.title,
          result.description,
          result.link,
          result.image,
          result.date,
          result.new_source_img
        ));
      }
    });
  }

  getLatestNews(): Observable<any> {
    const headers = {
      'X-User-Agent': this.X_USER_AGENT,
      'X-Proxy-Location': this.X_PROXY_LOCATION,
      'X-RapidAPI-Key': this.RAPIDAPI_KEY,
      'X-RapidAPI-Host': this.RAPIDAPI_HOST
    };
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headers), 
    };

    const query = 'q=futebol+noticias&tbm=nws';

    return this.httpClient.get(this.RAPIDAPI_URL + query, requestOptions);
  }
}
