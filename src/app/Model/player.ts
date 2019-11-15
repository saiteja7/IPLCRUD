import { Team } from './team';



export class Player {
    id: number;
    playerName: string;
    preference: string;
    matchesPlayed: number;
    runs?: number;
    wickets?: number;
    highestScore?: number;
    bestWicket?: string;
    fifties?: number;
    centuries?: number;
    thirties?: number;
    catches?: number;
    stumpings?: number;
    strikeRate: number;
    average?: number;
    fours?: number;
    sixes?: number;
    team?: Team;
}