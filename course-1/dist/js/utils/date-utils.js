import { WeekDays } from '../enums/index.js';
export class DateUtils {
    static isWorkDay(date) {
        const weekDay = date.getDay();
        return weekDay > WeekDays.SUNDAY && weekDay < WeekDays.SATURDAY;
    }
}
