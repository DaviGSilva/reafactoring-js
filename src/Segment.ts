export default class Segment {
    SPECIAL_DAY = 1;
    OVERNIGHT_START = 22;
    OVERNIGHT_END = 6;

    constructor(readonly distance: number, readonly date: Date) {
        if (!this.isValidDistance(this.distance))
            throw new Error('Invalid distance');
        if (!this.isValidDate(this.date))
            throw new Error('Invalid date');
    }

    isValidDistance(distance: number) {
        return distance != null && distance != undefined && typeof distance === "number" && distance > 0;
    }
    isValidDate(date: Date) {
        return date != null && date != undefined && date instanceof Date && date.toString() !== "Invalid Date";
    }

    isOvernight(date: Date) {
        return date.getHours() >= this.OVERNIGHT_START || date.getHours() <= this.OVERNIGHT_END;
    }
    isSunday(date: Date) {
        return date.getDay() === 0;
    }
    isSpecialDay(date: Date) {
        return date.getDate() === this.SPECIAL_DAY;
    }
}
