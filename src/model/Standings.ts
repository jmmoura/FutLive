import { Team } from "./Team";

export class Standings {
    leagueId: number;
    season: number;
    team: Team;
    rank: number;
    points: number;
    goalsDiff: number;
    played: number;
    win: number;
    draw: number;
    lose: number;
    goalsFor: number;
    goalsAgainst: number;

    constructor(leagueId: number, season: number, team: Team, rank: number,
                points: number, goalsDiff: number, played: number, win: number,
                draw: number, lose: number, goalsFor: number, goalsAgainst: number) {
        this.leagueId = leagueId;
        this.season = season;
        this.team = team;
        this.rank = rank;
        this.points = points;
        this.played = played;
        this.win = win;
        this.draw = draw;
        this.lose = lose;
        this.goalsFor = goalsFor;
        this.goalsAgainst = goalsAgainst;
        this.goalsDiff = goalsDiff;
    }
}