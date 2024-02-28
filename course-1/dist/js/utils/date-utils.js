import { WeekDays } from '../enums/index.js';
export class DateUtils {
    date;
    constructor(date) {
        this.date = date;
    }
    isWorkDay() {
        const weekDay = this.date.getDay();
        return weekDay > WeekDays.SUNDAY && weekDay < WeekDays.SATURDAY;
    }
}
