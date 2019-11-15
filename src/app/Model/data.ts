import { Team } from './team'
import { Player } from './player';

export class Data {

    rcb: Team = {
        id: 1,
        team: "RCB",
        description: "Royal Challengers Bengaluru",
        owner: "United Spirits",
        totalPlayed: 140,
        totalWon: 98,
        totalLost: 40,
        noResult: 2,
        players: []
    };
    csk: Team = {
        id: 2,
        team: "CSK",
        description: "Chennai Super Kings",
        owner: "Chennai Super Kings Cricket Ltd",
        totalPlayed: 140,
        totalWon: 98,
        totalLost: 40,
        noResult: 2,
        players: []
    };


    virat: Player = {
        id: 1,
        playerName: "Saiteja",
        preference: null,
        matchesPlayed: 1,
        runs: 11,
        wickets: 12,
        highestScore: 12,
        bestWicket: "78",
        fifties: 1,
        centuries: 22,
        thirties: 12,
        catches: 22,
        stumpings: 12,
        fours: 12,
        sixes: 11,
        strikeRate: 12.0,
        average: 10.0
    };
    ABD: Player = {
        id: 1,
        playerName: "ABD",
        preference: null,
        matchesPlayed: 1,
        runs: 11,
        wickets: 12,
        highestScore: 12,
        bestWicket: "78",
        fifties: 1,
        centuries: 22,
        thirties: 12,
        catches: 22,
        stumpings: 12,
        fours: 12,
        sixes: 11,
        strikeRate: 12.0,
        average: 10.0
    };

}


