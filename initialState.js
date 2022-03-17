export const currentMatchInitialState = {
  matchId: 0,
  homeTeamId: 0,
  awayTeamId: 0,
  homeTeamPlayers: [11, 12, 13, 14, 15, 16, 17, 18, 19],
  awayTeamPlayers: [21, 22, 23, 24, 25, 26, 27, 28, 29],
  venueId: 0,
  overs: 0,
  toss: 0 | 1,
  tossDecision: 0 | 1,
  battingFirstScore: 0,
  battingSecondScore: 0,
};

export const currentBatsmanInitialState = {
  playerId: 0,
  runs: 0,
  balls: 0,
  wicket: {
    //   null means batsman not dismissled with that option && all null then notout
    catch: 0 | null, // [caught]
    runOut: 0 | null, // [runOut]
    stumping: 0 | null, // [stumped]
    bowler: 0 | null, // [caught, bowled, stumped]
  },
  singles: 0,
  doubles: 0,
  triples: 0,
  fours: 0,
  sixes: 0,
};

export const nonStrikerInitialState = {
  playerId: 0,
  runs: 0,
  balls: 0,
  wicket: {
    //   null means batsman not dismissled with that option && all null then notout
    catch: 0 | null, // [caught]
    runOut: 0 | null, // [runOut]
    stumping: 0 | null, // [stumped]
    bowler: 0 | null, // [caught, bowled, stumped]
  },
  singles: 0,
  doubles: 0,
  triples: 0,
  fours: 0,
  sixes: 0,
};

export const currentBowlerInitialState = {
  playerId: 0,
  overs: 0.0,
  maidens: 0,
  runs: 0,
  wickets: 0,
  extras: {
    wides: 0,
    noBalls: 0,
    byes: 0,
  },
};

export const currentBattingTeamInitialState = {
  matchId: 0,
  teamId: 0,
  runs: 0,
  singles: 0,
  doubles: 0,
  triples: 0,
  fours: 0,
  sixes: 0,
  extras: {
    wides: 0,
    noBalls: 0,
    byes: 0,
  },
};

export const currentBowlingTeamInitialState = {
  matchId: 0,
  teamId: 0,
  overs: 0,
  runs: 0,
};

export const currentPartnershipInitialState = {
  matchId: 0,
  teamId: 0,
  runs: 0,
  balls: 0,
  playerOne: {
    id: 0,
    runs: 0,
    balls: 0,
    singles: 0,
    doubles: 0,
    triples: 0,
    fours: 0,
    sixes: 0,
  },
  playerTwo: {
    id: 0,
    runs: 0,
    balls: 0,
    singles: 0,
    doubles: 0,
    triples: 0,
    fours: 0,
    sixes: 0,
  },
  breaked: 0 | 1,
  outPlayer: 0,
};

export const currentOver = {
  matchId: 0,
  innings: 0 | 1,
  teamId: 0,
  bowlerId: 0,
  overId: 0,
  over: [
    {
      batsmanId: 0,
      run: 0 | 1 | 2 | 3 | 4 | 6,
      result: "run" | "wicket" | "dot",
    },
  ],
};

export const playerInfo = {
  id: "ad232-213-1231",
  firstName: "Vishal",
  lastName: "Kondle",
  dateOfBirth: "16-05-2000",
  role: 0 | 1 | 2 | 4,
  matchesPlayed: 0,
  battingStats: {
    innings: 0,
    runs: 0,
    balls: 0,
    singles: 0,
    doubles: 0,
    fours: 0,
    fives: 0,
    sixes: 0,
  },
  bowlingStats: {
    innings: 0,
    overs: 0.0,
    dotBalls: 0,
    maidens: 0,
    wickets: 0,
  },
  fieldingStats: {
    catches: 0,
    runOuts: 0,
    stumpings: 0,
  },
  joinedOn: "17-03-2022 9:51:34",
};
