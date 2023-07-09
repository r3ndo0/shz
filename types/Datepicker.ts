export interface time {
    unix: UnixOrTimestamp;
    timestamp: UnixOrTimestamp;
    timezone: TimezoneOrSeason;
    season: TimezoneOrSeason;
    time12: Time12;
    time24: Time24;
    date: Date;
  }
  export interface UnixOrTimestamp {
    fa: string;
    en: number;
  }
  export interface TimezoneOrSeason {
    name: string;
    number: NumberOrShortOrFullOrHourOrMinuteOrSecondOrMicrosecondOrIsoOrUsualOrDaysOrPercent;
  }
  export interface NumberOrShortOrFullOrHourOrMinuteOrSecondOrMicrosecondOrIsoOrUsualOrDaysOrPercent {
    fa: string;
    en: string;
  }
  export interface Time12 {
    full: Full;
    hour: NumberOrShortOrFullOrHourOrMinuteOrSecondOrMicrosecondOrIsoOrUsualOrDaysOrPercent;
    minute: NumberOrShortOrFullOrHourOrMinuteOrSecondOrMicrosecondOrIsoOrUsualOrDaysOrPercent;
    second: NumberOrShortOrFullOrHourOrMinuteOrSecondOrMicrosecondOrIsoOrUsualOrDaysOrPercent;
    microsecond: NumberOrShortOrFullOrHourOrMinuteOrSecondOrMicrosecondOrIsoOrUsualOrDaysOrPercent;
    shift: Shift;
  }
  export interface Full {
    short: NumberOrShortOrFullOrHourOrMinuteOrSecondOrMicrosecondOrIsoOrUsualOrDaysOrPercent;
    full: NumberOrShortOrFullOrHourOrMinuteOrSecondOrMicrosecondOrIsoOrUsualOrDaysOrPercent;
  }
  export interface Shift {
    short: string;
    full: string;
  }
  export interface Time24 {
    full: NumberOrShortOrFullOrHourOrMinuteOrSecondOrMicrosecondOrIsoOrUsualOrDaysOrPercent;
    hour: NumberOrShortOrFullOrHourOrMinuteOrSecondOrMicrosecondOrIsoOrUsualOrDaysOrPercent;
    minute: NumberOrShortOrFullOrHourOrMinuteOrSecondOrMicrosecondOrIsoOrUsualOrDaysOrPercent;
    second: NumberOrShortOrFullOrHourOrMinuteOrSecondOrMicrosecondOrIsoOrUsualOrDaysOrPercent;
  }
  export interface Date {
    full: Full1;
    other: Other;
    year: Year;
    month: Month;
    day: Day;
    weekday: Weekday;
  }
  export interface Full1 {
    official: OfficialOrUnofficialOrGregorianOrGhamari;
    unofficial: OfficialOrUnofficialOrGregorianOrGhamari;
  }
  export interface OfficialOrUnofficialOrGregorianOrGhamari {
    iso: NumberOrShortOrFullOrHourOrMinuteOrSecondOrMicrosecondOrIsoOrUsualOrDaysOrPercent;
    usual: NumberOrShortOrFullOrHourOrMinuteOrSecondOrMicrosecondOrIsoOrUsualOrDaysOrPercent;
  }
  export interface Other {
    gregorian: OfficialOrUnofficialOrGregorianOrGhamari;
    ghamari: OfficialOrUnofficialOrGregorianOrGhamari;
  }
  export interface Year {
    name: string;
    animal: string;
    leapyear: string;
    agone: AgoneOrLeft;
    left: AgoneOrLeft;
    number: NumberOrShortOrFullOrHourOrMinuteOrSecondOrMicrosecondOrIsoOrUsualOrDaysOrPercent;
  }
  export interface AgoneOrLeft {
    days: NumberOrShortOrFullOrHourOrMinuteOrSecondOrMicrosecondOrIsoOrUsualOrDaysOrPercent;
    percent: NumberOrShortOrFullOrHourOrMinuteOrSecondOrMicrosecondOrIsoOrUsualOrDaysOrPercent;
  }
  export interface Month {
    name: string;
    asterism: string;
    number: NumberOrShortOrFullOrHourOrMinuteOrSecondOrMicrosecondOrIsoOrUsualOrDaysOrPercent;
  }
  export interface Day {
    name: string;
    events: Events;
    number: NumberOrShortOrFullOrHourOrMinuteOrSecondOrMicrosecondOrIsoOrUsualOrDaysOrPercent;
  }
  export interface Events {
    local: LocalOrHoly;
    holy: LocalOrHoly;
    global?: null;
  }
  export interface LocalOrHoly {
    text: string;
    holiday: boolean;
  }
  export interface Weekday {
    name: string;
    champ: string;
    number: NumberOrShortOrFullOrHourOrMinuteOrSecondOrMicrosecondOrIsoOrUsualOrDaysOrPercent;
  }