const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let giveaway = document.querySelector('.giveaway')
let deadline = document.querySelector('.deadline')
let items = document.querySelectorAll('.deadline-format h4')

let futureDate = new Date(2023, 8, 24, 11, 30, 0);
let year = futureDate.getFullYear();
let hours = futureDate.getHours();
let minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
let date = futureDate.getDate();
let day = futureDate.getDay();
day = weekdays[day];
month = months[month];

giveaway.textContent = `giveaway ends on ${day},${date} ${month} ${year} ${hours}:${minutes}am`