// @ts-nocheck

const NORMAL_FARE = 2.1;
const OVERNIGHT_FARE = 3.9;
const SUNDAY_FARE = 2.9;
const OVERNIGHT_SUNDAY_FARE = 5;
const FIRST_DAY_FARE = 1.5;
const MIN_FARE = 10;

function isOvernight(date) {
	return date.getHours() >= 22 || date.getHours() <= 6;
}
function isSunday(date) {
	return date.getDay() === 0;
}
function isValidDistance(distance) {
	return distance != null && distance != undefined && typeof distance === "number" && distance > 0;
}
function isValidDate(date) {
	return date != null && date != undefined && date instanceof Date && date.toString() !== "Invalid Date";
}

export function calculateRides(segments) {
	let fare = 0;
	for (const segment of segments) {
		if (!isValidDistance(segment.distance))
			return -1;
		if (!isValidDate(segment.date))
			return -2;
		if (segment.date.getDate() === 1) {
			fare += segment.distance * FIRST_DAY_FARE;
			continue;
		}
		if (isOvernight(segment.date) && !isSunday(segment.date)) {
			fare += segment.distance * OVERNIGHT_FARE;
			continue;
		}
		if (isOvernight(segment.date) && isSunday(segment.date)) {
			fare += segment.distance * OVERNIGHT_SUNDAY_FARE;
			continue;
		}
		if (!isOvernight(segment.date) && isSunday(segment.date)) {
			fare += segment.distance * SUNDAY_FARE;
			continue;
		}
		if (!isOvernight(segment.date) && !isSunday(segment.date)) {
			fare += segment.distance * NORMAL_FARE;
			continue;
		}
	}
	return (fare < MIN_FARE) ? MIN_FARE : fare;
}
