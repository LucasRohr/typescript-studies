import { WeekDays } from '../enums/index.js'

export class DateUtils {
  public static isWorkDay(date: Date) {
    const weekDay: number = date.getDay()
    return weekDay > WeekDays.SUNDAY && weekDay < WeekDays.SATURDAY
  }
}
