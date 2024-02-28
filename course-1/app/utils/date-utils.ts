import { WeekDays } from '../enums/index.js'

export class DateUtils {
  private date: Date

  constructor(date: Date) {
    this.date = date
  }

  public isWorkDay() {
    const weekDay: number = this.date.getDay()
    return weekDay > WeekDays.SUNDAY && weekDay < WeekDays.SATURDAY
  }
}
