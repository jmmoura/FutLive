import { Team } from "./Team";

export class LiveMatch {
    id: number;
    elapsedTime: number;
    home: Team;
    away: Team;
    homeGoals: number;
    awayGoals: number;
    leagueName: string;
    leagueLogo: string;

    constructor(id: number, elapsedTime: number, home: Team, away: Team,
                homeGoals: number, awayGoals: number, leagueName: string,
                leagueLogo: string) {
        this.id = id;
        this.elapsedTime = elapsedTime;
        this.home = home;
        this.away = away;
        this.homeGoals = homeGoals;
        this.awayGoals = awayGoals;
        this.leagueName = leagueName;
        this.leagueLogo = leagueLogo;
    }
}