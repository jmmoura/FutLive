import { Component, Input } from '@angular/core';

import { LiveMatch } from 'src/model/LiveMatch';
import { News } from "src/model/News";
import { LiveMatchesService } from "src/app/services/live-matches.service";
import { NewsService } from "src/app/services/news.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  liveMatchesMap: Map<string, LiveMatch>;
  latestNews: News[];

  constructor(private liveMatchSvc: LiveMatchesService, private newsSvc: NewsService) {
    this.liveMatchesMap = liveMatchSvc.liveMatchesMap;
    this.latestNews = newsSvc.latestNews;
  }

}
