const lunchTime = (12 + 'PM');
const dinnerTime = (6 +'PM');
var openingTime = 8;
var workingHours = 16;
var closingTime = openingTime + workingHours;
var weeklyHours = workingHours * 7;

if (lunchTime === 12 + 'PM') {
	console.log ('Yay we will feed you');
}
else {
	console.log ('Sorry come back at either 12PM or 6PM');
}

if (dinnerTime === 6 + 'PM') {
	console.log ('Enjoy your meal');
}
else {
	console.log ('Please come back tomorrow');
}