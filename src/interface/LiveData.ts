export interface CompetitionName {
  Locale: string;
  Description: string;
}

export interface SeasonName {
  Locale: string;
  Description: string;
}

export interface Name {
  Locale: string;
  Description: string;
}

export interface CityName {
  Locale: string;
  Description: string;
}

export interface Properties {
  IdIFES: string;
}

export interface Stadium {
  IdStadium: string;
  Name: Name[];
  Capacity?: any;
  WebAddress?: any;
  Built?: any;
  Roof: boolean;
  Turf?: any;
  IdCity: string;
  CityName: CityName[];
  IdCountry: string;
  PostalCode?: any;
  Street?: any;
  Email?: any;
  Fax?: any;
  Phone?: any;
  AffiliationCountry?: any;
  AffiliationRegion?: any;
  Latitude?: any;
  Longitude?: any;
  Length?: any;
  Width?: any;
  Properties: Properties;
  IsUpdateable?: any;
}

export interface TypeLocalized {
  Locale: string;
  Description: string;
}

export interface Weather {
  Humidity: string;
  Temperature: string;
  WindSpeed: string;
  Type: number;
  TypeLocalized: TypeLocalized[];
}

export interface TeamName {
  Locale: string;
  Description: string;
}

export interface Name2 {
  Locale: string;
  Description: string;
}

export interface Alias {
  Locale: string;
  Description: string;
}

export interface Coach {
  IdCoach: string;
  IdCountry: string;
  PictureUrl: string;
  Name: Name2[];
  Alias: Alias[];
  Role: number;
  SpecialStatus?: any;
}

export interface PlayerName {
  Locale: string;
  Description: string;
}

export interface ShortName {
  Locale: string;
  Description: string;
}

export interface PlayerPicture {
  Id: string;
  PictureUrl: string;
}

export interface Player {
  IdPlayer: string;
  IdTeam: string;
  ShirtNumber: number;
  Status: number;
  SpecialStatus?: number;
  Captain: boolean;
  PlayerName: PlayerName[];
  ShortName: ShortName[];
  Position: number;
  PlayerPicture: PlayerPicture;
  FieldStatus: number;
  LineupX?: number;
  LineupY?: number;
}

export interface Booking {
  Card: number;
  Period: number;
  IdEvent?: any;
  EventNumber?: any;
  IdPlayer: string;
  IdCoach?: any;
  IdTeam: string;
  Minute: string;
  Reason?: any;
}

export interface Goal {
  Type: number;
  IdPlayer: string;
  Minute: string;
  IdAssistPlayer: string;
  Period: number;
  IdGoal?: any;
  IdTeam: string;
}

export interface PlayerOffName {
  Locale: string;
  Description: string;
}

export interface PlayerOnName {
  Locale: string;
  Description: string;
}

export interface Substitution {
  IdEvent?: any;
  Period: number;
  Reason: number;
  SubstitutePosition: number;
  IdPlayerOff: string;
  IdPlayerOn: string;
  PlayerOffName: PlayerOffName[];
  PlayerOnName: PlayerOnName[];
  Minute: string;
  IdTeam: string;
}

export interface HomeTeam {
  Score: number;
  Side?: any;
  IdTeam: string;
  PictureUrl: string;
  IdCountry: string;
  TeamType: number;
  AgeType: number;
  Tactics: string;
  TeamName: TeamName[];
  Abbreviation: string;
  Coaches: Coach[];
  Players: Player[];
  Bookings: Booking[];
  Goals: Goal[];
  Substitutions: Substitution[];
  FootballType: number;
  Gender: number;
  IdAssociation: string;
  ShortClubName: string;
}

export interface TeamName2 {
  Locale: string;
  Description: string;
}

export interface Name3 {
  Locale: string;
  Description: string;
}

export interface Alias2 {
  Locale: string;
  Description: string;
}

export interface Coach2 {
  IdCoach: string;
  IdCountry: string;
  PictureUrl: string;
  Name: Name3[];
  Alias: Alias2[];
  Role: number;
  SpecialStatus?: any;
}

export interface PlayerName2 {
  Locale: string;
  Description: string;
}

export interface ShortName2 {
  Locale: string;
  Description: string;
}

export interface PlayerPicture2 {
  Id: string;
  PictureUrl: string;
}

export interface Player2 {
  IdPlayer: string;
  IdTeam: string;
  ShirtNumber: number;
  Status: number;
  SpecialStatus?: number;
  Captain: boolean;
  PlayerName: PlayerName2[];
  ShortName: ShortName2[];
  Position: number;
  PlayerPicture: PlayerPicture2;
  FieldStatus: number;
  LineupX?: number;
  LineupY?: number;
}

export interface Booking2 {
  Card: number;
  Period: number;
  IdEvent?: any;
  EventNumber?: any;
  IdPlayer: string;
  IdCoach?: any;
  IdTeam: string;
  Minute: string;
  Reason?: any;
}

export interface PlayerOffName2 {
  Locale: string;
  Description: string;
}

export interface PlayerOnName2 {
  Locale: string;
  Description: string;
}

export interface Substitution2 {
  IdEvent?: any;
  Period: number;
  Reason: number;
  SubstitutePosition: number;
  IdPlayerOff: string;
  IdPlayerOn: string;
  PlayerOffName: PlayerOffName2[];
  PlayerOnName: PlayerOnName2[];
  Minute: string;
  IdTeam: string;
}

export interface AwayTeam {
  Score: number;
  Side?: any;
  IdTeam: string;
  PictureUrl: string;
  IdCountry: string;
  TeamType: number;
  AgeType: number;
  Tactics: string;
  TeamName: TeamName2[];
  Abbreviation: string;
  Coaches: Coach2[];
  Players: Player2[];
  Bookings: Booking2[];
  Goals: any[];
  Substitutions: Substitution2[];
  FootballType: number;
  Gender: number;
  IdAssociation: string;
  ShortClubName: string;
}

export interface BallPossession {
  Intervals: any[];
  LastX: any[];
  OverallHome: number;
  OverallAway: number;
}

export interface NameShort {
  Locale: string;
  Description: string;
}

export interface Name4 {
  Locale: string;
  Description: string;
}

export interface TypeLocalized2 {
  Locale: string;
  Description: string;
}

export interface Official {
  IdCountry: string;
  OfficialId: string;
  NameShort: NameShort[];
  Name: Name4[];
  OfficialType: number;
  TypeLocalized: TypeLocalized2[];
}

export interface GroupName {
  Locale: string;
  Description: string;
}

export interface StageName {
  Locale: string;
  Description: string;
}

export interface Properties2 {
  IdIFES: string;
}

export interface LiveData {
  IdMatch: string;
  IdStage: string;
  IdGroup: string;
  IdSeason: string;
  IdCompetition: string;
  CompetitionName: CompetitionName[];
  SeasonName: SeasonName[];
  SeasonShortName: any[];
  Stadium: Stadium;
  ResultType: number;
  MatchDay: string;
  HomeTeamPenaltyScore: number;
  AwayTeamPenaltyScore: number;
  AggregateHomeTeamScore?: any;
  AggregateAwayTeamScore?: any;
  Weather: Weather;
  Attendance: string;
  Date: Date;
  LocalDate: Date;
  MatchTime: string;
  SecondHalfTime?: any;
  FirstHalfTime?: any;
  FirstHalfExtraTime?: any;
  SecondHalfExtraTime?: any;
  Winner?: any;
  Period: number;
  HomeTeam: HomeTeam;
  AwayTeam: AwayTeam;
  BallPossession: BallPossession;
  TerritorialPossesion?: any;
  TerritorialThirdPossesion?: any;
  Officials: Official[];
  MatchStatus: number;
  GroupName: GroupName[];
  StageName: StageName[];
  OfficialityStatus: number;
  TimeDefined: boolean;
  Properties: Properties2;
  IsUpdateable?: any;
}
