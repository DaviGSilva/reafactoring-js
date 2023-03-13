// @ts-nocheck

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
			fare += segment.distance * 1.5;
			continue;
		}
		if (isOvernight(segment.date) && !isSunday(segment.date)) {
			fare += segment.distance * 3.90;
			continue;
		}
		if (isOvernight(segment.date) && isSunday(segment.date)) {
			fare += segment.distance * 5;
			continue;
		}
		if (!isOvernight(segment.date) && isSunday(segment.date)) {
			fare += segment.distance * 2.9;
			continue;
		}
		if (!isOvernight(segment.date) && !isSunday(segment.date)) {
			fare += segment.distance * 2.10;
			continue;
		}
	}
	if (fare < 10) {
		return 10;
	} else {
		return fare;
	}
}
