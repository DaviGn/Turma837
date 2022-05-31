import { isAfter, add, set } from 'date-fns';

let tomorow = new Date();
// tomorow = add(tomorow, {
//   days: 1,
// });
tomorow = set(tomorow, {
  date: 31,
});

console.log(isAfter(tomorow, new Date()));

// import { DateTime } from 'luxon';

// const myDateStr = '06/01/2022';
// const myDate = DateTime.fromFormat(myDateStr, 'MM/dd/yyyy');
// console.log(myDate.toLocaleString());

// let now = DateTime.local();
// console.log(now.toISO());
// const nowPlus = now.plus({ days: 2 });

// const result = nowPlus.diff(now, 'hours');

// console.log(result.hours);
