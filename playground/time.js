const moment = require("moment");

// Jan 1st 1970 00:00:00 am

const date = moment();
// date.add(1, "years").subtract(9, "months");
// console.log(date.format("MMM Do YYYY"));

// 10:35 am 
date.subtract(7, "hours");
console.log(date.format("h:mm a"));

const createAt = 1234;
const date2 = moment(createAt);

console.log(date2.format("h:mm a"));

const someTimestamp = moment().valueOf();

console.log(someTimestamp);