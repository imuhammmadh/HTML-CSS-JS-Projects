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

giveaway.textContent = `giveaway ends on ${day},${date} ${month} ${year} ${hours}:${minutes}`;

let futureTime = futureDate.getTime();

function getRemainingTime() {
  let today = new Date().getTime();
  let t = futureTime - today;
  let oneDay = 24 * 60 * 60 * 1000;
  let oneHour = 60 * 60 * 1000;
  let oneMinute = 60 * 1000;
  let oneSecond = 1000;
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / oneSecond);
  let values = [days, hours, minutes, seconds]
  function format(item) {
    if (item < 10) {
      return item = `0${item}`
    }
    return item
  }
  items.forEach((item, index) => {
    item.innerHTML = format(values[index])
  })
}
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();