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

export interface StageName {
  Locale: string;
  Description: string;
}

export interface GroupName {
  Locale: string;
  Description: string;
}

export interface CompetitionName {
  Locale: string;
  Description: string;
}

export interface SeasonName {
  Locale: string;
  Description: string;
}

export interface TeamName {
  Locale: string;
  Description: string;
}

export interface Home {
  Score: number;
  Side?: any;
  IdTeam: string;
  PictureUrl: string;
  IdCountry: string;
  Tactics: string;
  TeamType: number;
  AgeType: number;
  TeamName: TeamName[];
  Abbreviation: string;
  ShortClubName: string;
  FootballType: number;
  Gender: number;
  IdAssociation: string;
}

export interface TeamName2 {
  Locale: string;
  Description: string;
}

export interface Away {
  Score: number;
  Side?: any;
  IdTeam: string;
  PictureUrl: string;
  IdCountry: string;
  Tactics: string;
  TeamType: number;
  AgeType: number;
  TeamName: TeamName2[];
  Abbreviation: string;
  ShortClubName: string;
  FootballType: number;
  Gender: number;
  IdAssociation: string;
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

export interface Name2 {
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
  Name: Name2[];
  OfficialType: number;
  TypeLocalized: TypeLocalized2[];
}

export interface Properties2 {
  IdIFES: string;
}

export interface GameInfoObj {
  IdCompetition: string;
  IdSeason: string;
  IdStage: string;
  IdGroup: string;
  Weather: Weather;
  Attendance: string;
  IdMatch: string;
  MatchDay: string;
  StageName: StageName[];
  GroupName: GroupName[];
  CompetitionName: CompetitionName[];
  SeasonName: SeasonName[];
  SeasonShortName: any[];
  Date: Date;
  LocalDate: Date;
  Home: Home;
  Away: Away;
  HomeTeamScore: number;
  AwayTeamScore: number;
  AggregateHomeTeamScore?: any;
  AggregateAwayTeamScore?: any;
  HomeTeamPenaltyScore: number;
  AwayTeamPenaltyScore: number;
  LastPeriodUpdate?: any;
  Leg?: any;
  IsHomeMatch?: any;
  Stadium: Stadium;
  IsTicketSalesAllowed?: any;
  MatchTime: string;
  SecondHalfTime?: any;
  FirstHalfTime?: any;
  FirstHalfExtraTime?: any;
  SecondHalfExtraTime?: any;
  Winner: string;
  MatchReportUrl?: any;
  PlaceHolderA: string;
  PlaceHolderB: string;
  BallPossession: BallPossession;
  Officials: Official[];
  MatchStatus: number;
  ResultType: number;
  MatchNumber: number;
  TimeDefined: boolean;
  OfficialityStatus: number;
  MatchLegInfo?: any;
  Properties: Properties2;
  IsUpdateable?: any;
}
