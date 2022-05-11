//my city time and date

function todayDate() {
  let today = document.querySelector("#date");
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let date = now.getDate();
  let months = [
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
  let month = months[now.getMonth()];
  let year = now.getFullYear();
  if (date === 1 || date === 31) {
    today.innerHTML = `Today is <span class="highlightDay">${day}</span>, ${date}st of ${month} ${year}`;
  } else if (date === 2) {
    today.innerHTML = `Today is <span class="highlightDay">${day}</span>, ${date}nd of ${month} ${year}`;
  } else if (date === 3) {
    today.innerHTML = `Today is <span class="highlightDay">${day}</span>, ${date}rd of ${month} ${year}`;
  } else {
    today.innerHTML = `Today is <span class="highlightDay">${day}</span>, ${date}th of ${month} ${year}`;
  }

  let celebration = document.querySelector("#day-celebration");

  if (month === "January") {
    celebration.innerHTML = "Happy New Year 🎇";
  } else if (month === "February" && date !== 14) {
    celebration.innerHTML = "National Bird-Feeding Month 🦆";
  } else if (month === "February" && date === 14) {
    celebration.innerHTML = "Happy Valentine’s Day 💘";
  } else if (month === "March") {
    celebration.innerHTML = "Women's History Month 📜";
  } else if (month === "April" && date !== 22) {
    celebration.innerHTML = "National Pet Month 🐶";
  } else if (month === "April" && date === 22) {
    celebration.innerHTML = "Happy Earth Day 🌍";
  } else if (month === "May" && date !== 6) {
    celebration.innerHTML = "National Bike Month 🚲";
  } else if (month === "May" && date === 6) {
    celebration.innerHTML = "National Space Day 🚀";
  } else if (month === "June") {
    celebration.innerHTML = "LGBT Pride Month 🏳️‍🌈";
  } else if (month === "July") {
    celebration.innerHTML = "National Ice Cream Month 🍧";
  } else if (month === "August") {
    celebration.innerHTML = "National Yoga Month 🧘";
  } else if (month === "September") {
    celebration.innerHTML = "National Yoga Month 🧘";
  } else if (month === "October") {
    celebration.innerHTML = "National Pizza Month 🍕";
  } else if (month === "November") {
    celebration.innerHTML = "Academic Writing Month 📖";
  } else if (month === "December") {
    celebration.innerHTML = "This year is almost over ⛄";
  }
}
todayDate();

function currentTime() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let currentHour = document.querySelector("#current-hour");
  currentHour.innerHTML = `${hour}:${minute}`;

  // change image

  let imageElement = document.querySelector("#image");
  if (hour >= 5 && hour < 8) {
    imageElement.setAttribute("src", `media/sunrise by Luna Smith.jpg`);
  } else if (hour >= 8 && hour < 18) {
    imageElement.setAttribute("src", `media/day by Luna Smith.jpg`);
  } else if (hour >= 18 && hour < 21) {
    imageElement.setAttribute("src", `media/sunset by Luna Smith.jpg`);
  } else if (hour >= 21 && hour < 23) {
    imageElement.setAttribute("src", `media/thunder by Luna Smith.jpg`);
  } else {
    imageElement.setAttribute("src", `media/night by Luna Smith.jpg`);
  }
}
currentTime();

function nextDay() {
  let buttonNextDay = [
    "#button-day1",
    "#button-day2",
    "#button-day3",
    "#button-day4",
    "#button-day5",
  ];
  let now = new Date();
  let nextDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let nextDay1 = nextDays[now.getDay() + 1];
  let nextDay2 = nextDays[now.getDay() + 2];
  let nextDay3 = nextDays[now.getDay() + 3];
  let nextDay4 = nextDays[now.getDay() + 4];
  let nextDay5 = nextDays[now.getDay() + 5];
  if (now.getDay() > 5) {
    nextDay1 = nextDays[now.getDay() + 1 - 7];
  }
  if (now.getDay() > 4) {
    nextDay2 = nextDays[now.getDay() + 2 - 7];
  }
  if (now.getDay() > 3) {
    nextDay3 = nextDays[now.getDay() + 3 - 7];
  }
  if (now.getDay() > 2) {
    nextDay4 = nextDays[now.getDay() + 4 - 7];
  }
  if (now.getDay() > 1) {
    nextDay5 = nextDays[now.getDay() + 5 - 7];
  }
  let currentnextDay1 = document.querySelector(buttonNextDay[0]);
  currentnextDay1.innerHTML = nextDay1;
  let currentnextDay2 = document.querySelector(buttonNextDay[1]);
  currentnextDay2.innerHTML = nextDay2;
  let currentnextDay3 = document.querySelector(buttonNextDay[2]);
  currentnextDay3.innerHTML = nextDay3;
  let currentnextDay4 = document.querySelector(buttonNextDay[3]);
  currentnextDay4.innerHTML = nextDay4;
  let currentnextDay5 = document.querySelector(buttonNextDay[4]);
  currentnextDay5.innerHTML = nextDay5;
}
nextDay();

// search city

function currentSearchTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let celsiusTemperature = document.querySelector("#today-temperature");
  let celsiusTemperatureTable = document.querySelector(
    "#today-temperature-table"
  );
  celsiusTemperature.innerHTML =
    celsiusTemperatureTable.innerHTML = `${temperature}°C`;

  let toFTempConvert = (temperature * 9) / 5 + 32;
  let fTempConvert = Math.round(toFTempConvert);
  let toCTempConvert = ((fTempConvert - 32) * 5) / 9;
  let cTempConvert = Math.round(toCTempConvert);

  function currentSearchTemperatureFahrenheit() {
    let searchCurrentDegreeFahrenheit =
      document.querySelector("#today-temperature");
    let searchCurrentDegreeFahrenheitTable = document.querySelector(
      "#today-temperature-table"
    );
    searchCurrentDegreeFahrenheitTable.innerHTML =
      searchCurrentDegreeFahrenheit.innerHTML = `${fTempConvert}°F`;

    searchButtonDegreeCelsius.classList.remove("celsius");
    searchButtonDegreeFahrenheit.classList.add("celsius");
  }
  function currentSearchTemperatureCelsius() {
    let searchCurrentDegreeCelsius =
      document.querySelector("#today-temperature");
    let searchCurrentDegreeCelsiusTable = document.querySelector(
      "#today-temperature-table"
    );

    searchCurrentDegreeCelsiusTable.innerHTML =
      searchCurrentDegreeCelsius.innerHTML = `${cTempConvert}°C`;

    searchButtonDegreeCelsius.classList.add("celsius");
    searchButtonDegreeFahrenheit.classList.remove("celsius");
  }
  let searchButtonDegreeFahrenheit =
    document.querySelector("#degree-fahrenheit");
  searchButtonDegreeFahrenheit.addEventListener(
    "click",
    currentSearchTemperatureFahrenheit
  );
  let searchButtonDegreeCelsius = document.querySelector("#degree-celsius");
  searchButtonDegreeCelsius.addEventListener(
    "click",
    currentSearchTemperatureCelsius
  );
}
function timeSearchCity(response) {
  let sunriseTime = document.querySelector("#sunrise");
  let sunrise = response.data.sys.sunrise;
  let sunsetTime = document.querySelector("#sunset");
  let sunset = response.data.sys.sunset;
  let timezone = response.data.timezone;
  sunriseTime.innerHTML = moment
    .utc(sunrise, "X")
    .add(timezone, "seconds")
    .format("HH:mm");
  sunsetTime.innerHTML = moment
    .utc(sunset, "X")
    .add(timezone, "seconds")
    .format("HH:mm");

  let now = new Date();
  let localTime = now.getTime();
  let localOffset = now.getTimezoneOffset() * 60000;
  let stc = localTime + localOffset;
  let searchCity = stc + 1000 * +timezone;
  let searchDate = new Date(searchCity);
  let hour = searchDate.getHours();
  let minute = searchDate.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let currentHour = document.querySelector("#current-hour");
  currentHour.innerHTML = `${hour}:${minute}`;

  let today = document.querySelector("#date");
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[searchDate.getDay()];
  let date = searchDate.getDate();
  let months = [
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
  let month = months[searchDate.getMonth()];
  let year = searchDate.getFullYear();
  if (date === 1 || date === 31) {
    today.innerHTML = `Today is <span class="highlightDay">${day}</span>, ${date}st of ${month} ${year}`;
  } else if (date === 2) {
    today.innerHTML = `Today is <span class="highlightDay">${day}</span>, ${date}nd of ${month} ${year}`;
  } else if (date === 3) {
    today.innerHTML = `Today is <span class="highlightDay">${day}</span>, ${date}rd of ${month} ${year}`;
  } else {
    today.innerHTML = `Today is <span class="highlightDay">${day}</span>, ${date}th of ${month} ${year}`;
  }

  // change image
  let imageElement = document.querySelector("#image");
  if (hour >= 5 && hour < 8) {
    imageElement.setAttribute("src", `media/sunrise by Luna Smith.jpg`);
  } else if (hour >= 8 && hour < 18) {
    imageElement.setAttribute("src", `media/day by Luna Smith.jpg`);
  } else if (hour >= 18 && hour < 21) {
    imageElement.setAttribute("src", `media/sunset by Luna Smith.jpg`);
  } else if (hour >= 21 && hour < 23) {
    imageElement.setAttribute("src", `media/thunder by Luna Smith.jpg`);
  } else {
    imageElement.setAttribute("src", `media/night by Luna Smith.jpg`);
  }
}
function speedWindSearchCity(response) {
  let currentSpeedWind = document.querySelector("#today-SpeedWind");
  currentSpeedWind.innerHTML = Math.round(response.data.wind.speed);
}
function emoji(response) {
  let mainEmoji = document.querySelector("#main-emoji");
  if (response.data.weather[0].description === "overcast clouds") {
    mainEmoji.innerHTML = `<img src="media/clouds by Luna Smith.png"  alt="clouds emoji by Luna Smith" width="50" / >`;
  } else if (response.data.weather[0].description === "clear sky") {
    mainEmoji.innerHTML = `<img src="media/sunny by Luna Smith.png"  alt="sunny emoji by Luna Smith" width="50" / >`;
  } else if (response.data.weather[0].description === "few clouds") {
    mainEmoji.innerHTML = `<img src="media/partly sunny by Luna Smith.png"  alt="partly sunny emoji by Luna Smith" width="50" / >`;
  } else if (
    response.data.weather[0].description === "scattered clouds" ||
    response.data.weather[0].description === "broken clouds"
  ) {
    mainEmoji.innerHTML = `<img src="media/broken clouds by Luna Smith.png"  alt="broken clouds emoji by Luna Smith" width="50" / >`;
  } else if (
    response.data.weather[0].main === "Smoke" ||
    response.data.weather[0].main === "Haze"
  ) {
    mainEmoji.innerHTML = `<img src="media/smoke by Luna Smith.png"  alt="smoke emoji by Luna Smith" width="50"/ >`;
  } else if (
    response.data.weather[0].main === "Dust" ||
    response.data.weather[0].main === "Ash" ||
    response.data.weather[0].main === "Sand"
  ) {
    mainEmoji.innerHTML = `<img src="media/sand by Luna Smith.png"  alt="smoke emoji by Luna Smith" width="50"/ >`;
  } else if (
    response.data.weather[0].description === "light rain" ||
    response.data.weather[0].description === "shower rain" ||
    response.data.weather[0].description === " light intensity shower rain" ||
    response.data.weather[0].description === " heavy intensity shower rain" ||
    response.data.weather[0].description === " ragged shower rain" ||
    response.data.weather[0].main === "Drizzle"
  ) {
    mainEmoji.innerHTML = `<img src="media/light rain by Luna Smith.png"  alt="light rain emoji by Luna Smith" width="50" / >`;
  } else if (
    response.data.weather[0].description === "mist" ||
    response.data.weather[0].description === "fog"
  ) {
    mainEmoji.innerHTML = `<img src="media/mist by Luna Smith.png"  alt="mist emoji by Luna Smith" width="50"/ >`;
  } else if (
    response.data.weather[0].description === "heavy rain" ||
    response.data.weather[0].description === "heavy intensity rain" ||
    response.data.weather[0].description === "very heavy rain" ||
    response.data.weather[0].description === "moderate rain" ||
    response.data.weather[0].description === "freezing rain"
  ) {
    mainEmoji.innerHTML = `<img src="media/rain by Luna Smith.png"  alt="rain emoji by Luna Smith" width="50" / >`;
  } else if (response.data.weather[0].main === "Thunderstorm") {
    mainEmoji.innerHTML = `<img src="media/thunder by Luna Smith.png"  alt="thunder emoji by Luna Smith" width="50" / >`;
  } else if (
    response.data.list[0].weather[0].main === "Snow" ||
    response.data.list[0].weather[0].main === "Squall"
  ) {
    mainEmoji.innerHTML = `<img src="media/snow by Luna Smith.png"  alt="snow emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[0].weather[0].main === "Tornado") {
    mainEmoji.innerHTML = `<img src="media/snow by Luna Smith.png"  alt="tornado emoji by Luna Smith" width="50" / >`;
  }
}

function humiditySearchCity(response) {
  let currentHumidity = document.querySelector("#today-rain");
  currentHumidity.innerHTML = Math.round(response.data.main.humidity);
}
function nextHourSearchWeather(response) {
  let day1Emoji = document.querySelector("#emoji1");
  let day2Emoji = document.querySelector("#emoji2");
  let day3Emoji = document.querySelector("#emoji3");
  let day4Emoji = document.querySelector("#emoji4");
  let day5Emoji = document.querySelector("#emoji5");

  if (
    response.data.list[1].weather[0].description === "overcast clouds" ||
    response.data.list[2].weather[0].description === "overcast clouds" ||
    response.data.list[3].weather[0].description === "overcast clouds" ||
    response.data.list[4].weather[0].description === "overcast clouds" ||
    response.data.list[5].weather[0].description === "overcast clouds"
  ) {
    day1Emoji.innerHTML =
      day2Emoji.innerHTML =
      day3Emoji.innerHTML =
      day4Emoji.innerHTML =
      day5Emoji.innerHTML =
        `<img src="media/clouds by Luna Smith.png"  alt="clouds emoji by Luna Smith" width="50" / >`;
  } else if (
    response.data.list[1].weather[0].description === "clear sky" ||
    response.data.list[2].weather[0].description === "clear sky" ||
    response.data.list[3].weather[0].description === "clear sky" ||
    response.data.list[4].weather[0].description === "clear sky" ||
    response.data.list[5].weather[0].description === "clear sky"
  ) {
    day1Emoji.innerHTML =
      day2Emoji.innerHTML =
      day3Emoji.innerHTML =
      day4Emoji.innerHTML =
      day5Emoji.innerHTML =
        `<img src="media/sunny by Luna Smith.png"  alt="sunny emoji by Luna Smith" width="50" / >`;
  } else if (
    response.data.list[1].weather[0].description === "few clouds" ||
    response.data.list[2].weather[0].description === "few clouds" ||
    response.data.list[3].weather[0].description === "few clouds" ||
    response.data.list[4].weather[0].description === "few clouds" ||
    response.data.list[5].weather[0].description === "few clouds"
  ) {
    day1Emoji.innerHTML =
      day2Emoji.innerHTML =
      day3Emoji.innerHTML =
      day4Emoji.innerHTML =
      day5Emoji.innerHTML =
        `<img src="media/partly sunny by Luna Smith.png"  alt="partly sunny emoji by Luna Smith" width="50" / >`;
  } else if (
    response.data.list[1].weather[0].description === "scattered clouds" ||
    response.data.list[2].weather[0].description === "scattered clouds" ||
    response.data.list[3].weather[0].description === "scattered clouds" ||
    response.data.list[4].weather[0].description === "scattered clouds" ||
    response.data.list[5].weather[0].description === "scattered clouds" ||
    response.data.list[1].weather[0].description === "broken clouds" ||
    response.data.list[2].weather[0].description === "broken clouds" ||
    response.data.list[3].weather[0].description === "broken clouds" ||
    response.data.list[4].weather[0].description === "broken clouds" ||
    response.data.list[5].weather[0].description === "broken clouds"
  ) {
    day1Emoji.innerHTML =
      day2Emoji.innerHTML =
      day3Emoji.innerHTML =
      day4Emoji.innerHTML =
      day5Emoji.innerHTML =
        `<img src="media/broken clouds by Luna Smith.png"  alt="broken clouds emoji by Luna Smith" width="50" / >`;
  } else if (
    response.data.list[1].weather[0].main === "Smoke" ||
    response.data.list[2].weather[0].main === "Smoke" ||
    response.data.list[3].weather[0].main === "Smoke" ||
    response.data.list[4].weather[0].main === "Smoke" ||
    response.data.list[5].weather[0].main === "Smoke" ||
    response.data.list[1].weather[0].main === "Haze" ||
    response.data.list[2].weather[0].main === "Haze" ||
    response.data.list[3].weather[0].main === "Haze" ||
    response.data.list[4].weather[0].main === "Haze" ||
    response.data.list[5].weather[0].main === "Haze"
  ) {
    day1Emoji.innerHTML =
      day2Emoji.innerHTML =
      day3Emoji.innerHTML =
      day4Emoji.innerHTML =
      day5Emoji.innerHTML =
        `<img src="media/smoke by Luna Smith.png"  alt="smoke emoji by Luna Smith" width="50"/ >`;
  } else if (
    response.data.list[1].weather[0].main === "Dust" ||
    response.data.list[2].weather[0].main === "Dust" ||
    response.data.list[3].weather[0].main === "Dust" ||
    response.data.list[4].weather[0].main === "Dust" ||
    response.data.list[5].weather[0].main === "Dust" ||
    response.data.list[1].weather[0].main === "Ash" ||
    response.data.list[2].weather[0].main === "Ash" ||
    response.data.list[3].weather[0].main === "Ash" ||
    response.data.list[4].weather[0].main === "Ash" ||
    response.data.list[5].weather[0].main === "Ash" ||
    response.data.list[1].weather[0].main === "Sand" ||
    response.data.list[2].weather[0].main === "Sand" ||
    response.data.list[3].weather[0].main === "Sand" ||
    response.data.list[4].weather[0].main === "Sand" ||
    response.data.list[5].weather[0].main === "Sand"
  ) {
    day1Emoji.innerHTML =
      day2Emoji.innerHTML =
      day3Emoji.innerHTML =
      day4Emoji.innerHTML =
      day5Emoji.innerHTML =
        `<img src="media/sand by Luna Smith.png"  alt="smoke emoji by Luna Smith" width="50"/ >`;
  } else if (
    response.data.list[1].weather[0].description === "light rain" ||
    response.data.list[2].weather[0].description === "light rain" ||
    response.data.list[3].weather[0].description === "light rain" ||
    response.data.list[4].weather[0].description === "light rain" ||
    response.data.list[5].weather[0].description === "light rain" ||
    response.data.list[1].weather[0].description === "shower rain" ||
    response.data.list[2].weather[0].description === "shower rain" ||
    response.data.list[3].weather[0].description === "shower rain" ||
    response.data.list[4].weather[0].description === "shower rain" ||
    response.data.list[5].weather[0].description === "shower rain" ||
    response.data.list[1].weather[0].description ===
      " light intensity shower rain" ||
    response.data.list[2].weather[0].description ===
      " light intensity shower rain" ||
    response.data.list[3].weather[0].description ===
      " light intensity shower rain" ||
    response.data.list[4].weather[0].description ===
      " light intensity shower rain" ||
    response.data.list[5].weather[0].description ===
      " light intensity shower rain" ||
    response.data.list[1].weather[0].description ===
      " heavy intensity shower rain" ||
    response.data.list[2].weather[0].description ===
      " heavy intensity shower rain" ||
    response.data.list[3].weather[0].description ===
      " heavy intensity shower rain" ||
    response.data.list[4].weather[0].description ===
      " heavy intensity shower rain" ||
    response.data.list[5].weather[0].description ===
      " heavy intensity shower rain" ||
    response.data.list[1].weather[0].description === " ragged shower rain" ||
    response.data.list[2].weather[0].description === " ragged shower rain" ||
    response.data.list[3].weather[0].description === " ragged shower rain" ||
    response.data.list[4].weather[0].description === " ragged shower rain" ||
    response.data.list[5].weather[0].description === " ragged shower rain" ||
    response.data.list[1].weather[0].main === "Drizzle" ||
    response.data.list[2].weather[0].main === "Drizzle" ||
    response.data.list[3].weather[0].main === "Drizzle" ||
    response.data.list[4].weather[0].main === "Drizzle" ||
    response.data.list[5].weather[0].main === "Drizzle"
  ) {
    day1Emoji.innerHTML =
      day2Emoji.innerHTML =
      day3Emoji.innerHTML =
      day4Emoji.innerHTML =
      day5Emoji.innerHTML =
        `<img src="media/light rain by Luna Smith.png"  alt="light rain emoji by Luna Smith" width="50" / >`;
  } else if (
    response.data.list[1].weather[0].description === "mist" ||
    response.data.list[2].weather[0].description === "mist" ||
    response.data.list[3].weather[0].description === "mist" ||
    response.data.list[4].weather[0].description === "mist" ||
    response.data.list[5].weather[0].description === "mist" ||
    response.data.list[1].weather[0].description === "fog" ||
    response.data.list[2].weather[0].description === "fog" ||
    response.data.list[3].weather[0].description === "fog" ||
    response.data.list[4].weather[0].description === "fog" ||
    response.data.list[5].weather[0].description === "fog"
  ) {
    day1Emoji.innerHTML =
      day2Emoji.innerHTML =
      day3Emoji.innerHTML =
      day4Emoji.innerHTML =
      day5Emoji.innerHTML =
        `<img src="media/mist by Luna Smith.png"  alt="mist emoji by Luna Smith" width="50"/ >`;
  } else if (
    response.data.list[1].weather[0].description === "heavy rain" ||
    response.data.list[2].weather[0].description === "heavy rain" ||
    response.data.list[3].weather[0].description === "heavy rain" ||
    response.data.list[4].weather[0].description === "heavy rain" ||
    response.data.list[5].weather[0].description === "heavy rain" ||
    response.data.list[1].weather[0].description === "heavy intensity rain" ||
    response.data.list[2].weather[0].description === "heavy intensity rain" ||
    response.data.list[3].weather[0].description === "heavy intensity rain" ||
    response.data.list[4].weather[0].description === "heavy intensity rain" ||
    response.data.list[5].weather[0].description === "heavy intensity rain" ||
    response.data.list[1].weather[0].description === "very heavy rain" ||
    response.data.list[2].weather[0].description === "very heavy rain" ||
    response.data.list[3].weather[0].description === "very heavy rain" ||
    response.data.list[4].weather[0].description === "very heavy rain" ||
    response.data.list[5].weather[0].description === "very heavy rain" ||
    response.data.list[1].weather[0].description === "moderate rain" ||
    response.data.list[2].weather[0].description === "moderate rain" ||
    response.data.list[3].weather[0].description === "moderate rain" ||
    response.data.list[4].weather[0].description === "moderate rain" ||
    response.data.list[5].weather[0].description === "moderate rain" ||
    response.data.list[1].weather[0].description === "freezing rain" ||
    response.data.list[2].weather[0].description === "freezing rain" ||
    response.data.list[3].weather[0].description === "freezing rain" ||
    response.data.list[4].weather[0].description === "freezing rain" ||
    response.data.list[5].weather[0].description === "freezing rain"
  ) {
    day1Emoji.innerHTML =
      day2Emoji.innerHTML =
      day3Emoji.innerHTML =
      day4Emoji.innerHTML =
      day5Emoji.innerHTML =
        `<img src="media/rain by Luna Smith.png"  alt="rain emoji by Luna Smith" width="50" / >`;
  } else if (
    response.data.list[1].weather[0].main === "Thunderstorm" ||
    response.data.list[2].weather[0].main === "Thunderstorm" ||
    response.data.list[3].weather[0].main === "Thunderstorm" ||
    response.data.list[4].weather[0].main === "Thunderstorm" ||
    response.data.list[5].weather[0].main === "Thunderstorm"
  ) {
    mainEmoji.innerHTML = `<img src="media/thunder by Luna Smith.png"  alt="thunder emoji by Luna Smith" width="50" / >`;
  } else if (
    response.data.list[1].list[0].weather[0].main === "Snow" ||
    response.data.list[2].list[0].weather[0].main === "Snow" ||
    response.data.list[3].list[0].weather[0].main === "Snow" ||
    response.data.list[4].list[0].weather[0].main === "Snow" ||
    response.data.list[5].list[0].weather[0].main === "Snow" ||
    response.data.list[1].list[0].weather[0].main === "Squall" ||
    response.data.list[2].list[0].weather[0].main === "Squall" ||
    response.data.list[3].list[0].weather[0].main === "Squall" ||
    response.data.list[4].list[0].weather[0].main === "Squall" ||
    response.data.list[5].list[0].weather[0].main === "Squall"
  ) {
    day1Emoji.innerHTML =
      day2Emoji.innerHTML =
      day3Emoji.innerHTML =
      day4Emoji.innerHTML =
      day5Emoji.innerHTML =
        `<img src="media/snow by Luna Smith.png"  alt="snow emoji by Luna Smith" width="50" / >`;
  } else if (
    response.data.list[1].list[0].weather[0].main === "Tornado" ||
    response.data.list[2].list[0].weather[0].main === "Tornado" ||
    response.data.list[3].list[0].weather[0].main === "Tornado" ||
    response.data.list[4].list[0].weather[0].main === "Tornado" ||
    response.data.list[5].list[0].weather[0].main === "Tornado"
  ) {
    day1Emoji.innerHTML =
      day2Emoji.innerHTML =
      day3Emoji.innerHTML =
      day4Emoji.innerHTML =
      day5Emoji.innerHTML =
        `<img src="media/snow by Luna Smith.png"  alt="tornado emoji by Luna Smith" width="50" / >`;
  }

  let nextDaySearchSpeedWind1 = document.querySelector("#SpeedWind1");
  nextDaySearchSpeedWind1.innerHTML = Math.round(
    response.data.list[0].wind.speed
  );
  let nextDaySearchSpeedWind2 = document.querySelector("#SpeedWind2");
  nextDaySearchSpeedWind2.innerHTML = Math.round(
    response.data.list[1].wind.speed
  );
  let nextDaySearchSpeedWind3 = document.querySelector("#SpeedWind3");
  nextDaySearchSpeedWind3.innerHTML = Math.round(
    response.data.list[2].wind.speed
  );
  let nextDaySearchSpeedWind4 = document.querySelector("#SpeedWind4");
  nextDaySearchSpeedWind4.innerHTML = Math.round(
    response.data.list[3].wind.speed
  );
  let nextDaySearchSpeedWind5 = document.querySelector("#SpeedWind5");
  nextDaySearchSpeedWind5.innerHTML = Math.round(
    response.data.list[4].wind.speed
  );
  let nextDaySearchHumidity1 = document.querySelector("#rain1");
  nextDaySearchHumidity1.innerHTML = Math.round(
    response.data.list[0].main.humidity
  );
  let nextDaySearchHumidity2 = document.querySelector("#rain2");
  nextDaySearchHumidity2.innerHTML = Math.round(
    response.data.list[1].main.humidity
  );
  let nextDaySearchHumidity3 = document.querySelector("#rain3");
  nextDaySearchHumidity3.innerHTML = Math.round(
    response.data.list[2].main.humidity
  );
  let nextDaySearchHumidity4 = document.querySelector("#rain4");
  nextDaySearchHumidity4.innerHTML = Math.round(
    response.data.list[3].main.humidity
  );
  let nextDaySearchHumidity5 = document.querySelector("#rain5");
  nextDaySearchHumidity5.innerHTML = Math.round(
    response.data.list[4].main.humidity
  );
  let nextHourSearchTime1 = document.querySelector("#current-hour1");
  let nextSearchHour1 = response.data.list[0].dt;
  let timezone = response.data.city.timezone;
  let nextRealHourSearchTime1 = moment
    .utc(nextSearchHour1, "X")
    .add(timezone, "seconds")
    .format("HH:mm");
  nextHourSearchTime1.innerHTML = nextRealHourSearchTime1;

  let nextHourSearchTime2 = document.querySelector("#current-hour2");
  let nextSearchHour2 = response.data.list[1].dt;
  let nextRealHourSearchTime2 = moment
    .utc(nextSearchHour2, "X")
    .add(timezone, "seconds")
    .format("HH:mm");
  nextHourSearchTime2.innerHTML = nextRealHourSearchTime2;

  let nextHourSearchTime3 = document.querySelector("#current-hour3");
  let nextSearchHour3 = response.data.list[2].dt;
  let nextRealHourSearchTime3 = moment
    .utc(nextSearchHour3, "X")
    .add(timezone, "seconds")
    .format("HH:mm");
  nextHourSearchTime3.innerHTML = nextRealHourSearchTime3;

  let nextHourSearchTime4 = document.querySelector("#current-hour4");
  let nextSearchHour4 = response.data.list[3].dt;
  let nextRealHourSearchTime4 = moment
    .utc(nextSearchHour4, "X")
    .add(timezone, "seconds")
    .format("HH:mm");
  nextHourSearchTime4.innerHTML = nextRealHourSearchTime4;

  let nextHourSearchTime5 = document.querySelector("#current-hour5");
  let nextSearchHour5 = response.data.list[4].dt;
  let nextRealHourSearchTime5 = moment
    .utc(nextSearchHour5, "X")
    .add(timezone, "seconds")
    .format("HH:mm");
  nextHourSearchTime5.innerHTML = nextRealHourSearchTime5;

  let nextdaySearchTemperature1 = document.querySelector("#next-hour-temp-1");
  let tempSearchHourly1 = Math.round(response.data.list[0].main.temp);
  nextdaySearchTemperature1.innerHTML = `${tempSearchHourly1}°C`;

  let nextdaySearchTemperature2 = document.querySelector("#next-hour-temp-2");
  let tempSearchHourly2 = Math.round(response.data.list[1].main.temp);
  nextdaySearchTemperature2.innerHTML = `${tempSearchHourly2}°C`;

  let nextdaySearchTemperature3 = document.querySelector("#next-hour-temp-3");
  let tempSearchHourly3 = Math.round(response.data.list[2].main.temp);
  nextdaySearchTemperature3.innerHTML = `${tempSearchHourly3}°C`;

  let nextdaySearchTemperature4 = document.querySelector("#next-hour-temp-4");
  let tempSearchHourly4 = Math.round(response.data.list[3].main.temp);
  nextdaySearchTemperature4.innerHTML = `${tempSearchHourly4}°C`;

  let nextdaySearchTemperature5 = document.querySelector("#next-hour-temp-5");
  let tempSearchHourly5 = Math.round(response.data.list[4].main.temp);
  nextdaySearchTemperature5.innerHTML = `${tempSearchHourly5}°C`;

  let toFTempConvert1 = (tempSearchHourly1 * 9) / 5 + 32;
  let fTempConvert1 = Math.round(toFTempConvert1);
  let toCTempConvert1 = ((fTempConvert1 - 32) * 5) / 9;
  let cTempConvert1 = Math.round(toCTempConvert1);
  let toFTempConvert2 = (tempSearchHourly2 * 9) / 5 + 32;
  let fTempConvert2 = Math.round(toFTempConvert2);
  let toCTempConvert2 = ((fTempConvert2 - 32) * 5) / 9;
  let cTempConvert2 = Math.round(toCTempConvert2);
  let toFTempConvert3 = (tempSearchHourly3 * 9) / 5 + 32;
  let fTempConvert3 = Math.round(toFTempConvert3);
  let toCTempConvert3 = ((fTempConvert3 - 32) * 5) / 9;
  let cTempConvert3 = Math.round(toCTempConvert3);
  let toFTempConvert4 = (tempSearchHourly4 * 9) / 5 + 32;
  let fTempConvert4 = Math.round(toFTempConvert4);
  let toCTempConvert4 = ((fTempConvert4 - 32) * 5) / 9;
  let cTempConvert4 = Math.round(toCTempConvert4);
  let toFTempConvert5 = (tempSearchHourly5 * 9) / 5 + 32;
  let fTempConvert5 = Math.round(toFTempConvert5);
  let toCTempConvert5 = ((fTempConvert5 - 32) * 5) / 9;
  let cTempConvert5 = Math.round(toCTempConvert5);

  function currentNextTemperatureFahrenheit() {
    let currentNextFTemperature1 = document.querySelector("#next-hour-temp-1");
    currentNextFTemperature1.innerHTML = `${fTempConvert1}°F`;

    let currentNextFTemperature2 = document.querySelector("#next-hour-temp-2");
    currentNextFTemperature2.innerHTML = `${fTempConvert2}°F`;

    let currentNextFTemperature3 = document.querySelector("#next-hour-temp-3");
    currentNextFTemperature3.innerHTML = `${fTempConvert3}°F`;

    let currentNextFTemperature4 = document.querySelector("#next-hour-temp-4");
    currentNextFTemperature4.innerHTML = `${fTempConvert4}°F`;

    let currentNextFTemperature5 = document.querySelector("#next-hour-temp-5");
    currentNextFTemperature5.innerHTML = `${fTempConvert5}°F`;
    currentDegreeCelsius.classList.remove("celsius");
    currentDegreeFahrenheit.classList.add("celsius");
  }
  let currentDegreeFahrenheit = document.querySelector("#degree-fahrenheit");
  currentDegreeFahrenheit.addEventListener(
    "click",
    currentNextTemperatureFahrenheit
  );

  function currentNextTemperatureCelsius() {
    let currentNextCTemperature1 = document.querySelector("#next-hour-temp-1");
    currentNextCTemperature1.innerHTML = `${cTempConvert1}°C`;

    let currentNextCTemperature2 = document.querySelector("#next-hour-temp-2");
    currentNextCTemperature2.innerHTML = `${cTempConvert2}°C`;

    let currentNextCTemperature3 = document.querySelector("#next-hour-temp-3");
    currentNextCTemperature3.innerHTML = `${cTempConvert3}°C`;

    let currentNextCTemperature4 = document.querySelector("#next-hour-temp-4");
    currentNextCTemperature4.innerHTML = `${cTempConvert4}°C`;

    let currentNextCTemperature5 = document.querySelector("#next-hour-temp-5");
    currentNextCTemperature5.innerHTML = `${cTempConvert5}°C`;

    currentDegreeCelsius.classList.add("celsius");
    currentDegreeFahrenheit.classList.remove("celsius");
  }
  let currentDegreeCelsius = document.querySelector("#degree-celsius");
  currentDegreeCelsius.addEventListener("click", currentNextTemperatureCelsius);
}

function displayCity(response) {
  let currentCity = document.querySelector("h2");
  currentCity.innerHTML = response.data.name;
}
function formCitySearch(event) {
  event.preventDefault();

  let city = document.querySelector("#search-city").value;
  city = city.trim();
  initialCity(city);
}

let form = document.querySelector("#form");
form.addEventListener("submit", formCitySearch);

// my city button
function showCurrentPosition(position) {
  let apiKey = "735bf932678c0291fa1c42303b18350e";
  let apiEndElement = "https://api.openweathermap.org/data/2.5/weather?";
  let apiEndElementHourly = "https://api.openweathermap.org/data/2.5/forecast?";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiUrl = `${apiEndElement}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  let apiUrlHourly = `${apiEndElementHourly}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(emoji);
  axios.get(apiUrl).then(currentSearchTemperature);
  axios.get(apiUrl).then(timeSearchCity);
  axios.get(apiUrl).then(speedWindSearchCity);
  axios.get(apiUrl).then(humiditySearchCity);
  axios.get(apiUrl).then(displayCity);
  axios.get(apiUrlHourly).then(nextHourSearchWeather);
}
function showMyCity(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showCurrentPosition);
}

let myCity = document.querySelector("#my-city");
myCity.addEventListener("click", showMyCity);

// initial city

function initialCity(city) {
  let apiKey = "735bf932678c0291fa1c42303b18350e";
  let apiEndElement = "https://api.openweathermap.org/data/2.5/weather?";
  let apiEndElementHourly = "https://api.openweathermap.org/data/2.5/forecast?";
  let units = "metric";
  let apiUrl = `${apiEndElement}q=${city}&appid=${apiKey}&units=${units}`;
  let apiUrlHourly = `${apiEndElementHourly}q=${city}&appid=${apiKey}&units=${units}`;

  let nextDay0Button = document.querySelector("#current-day");
  nextDay0Button.addEventListener("click", showWeatherForecastNextDay0);

  let nextDay1Button = document.querySelector("#button-day1");
  nextDay1Button.addEventListener("click", showWeatherForecastNextDay1);

  let nextDay2Button = document.querySelector("#button-day2");
  nextDay2Button.addEventListener("click", showWeatherForecastNextDay2);

  let nextDay3Button = document.querySelector("#button-day3");
  nextDay3Button.addEventListener("click", showWeatherForecastNextDay3);

  let nextDay4Button = document.querySelector("#button-day4");
  nextDay4Button.addEventListener("click", showWeatherForecastNextDay4);

  let nextDay5Button = document.querySelector("#button-day5");
  nextDay5Button.addEventListener("click", showWeatherForecastNextDay5);

  axios.get(apiUrl).then(emoji);
  axios.get(apiUrl).then(currentSearchTemperature);
  axios.get(apiUrl).then(timeSearchCity);
  axios.get(apiUrl).then(speedWindSearchCity);
  axios.get(apiUrl).then(humiditySearchCity);
  axios.get(apiUrl).then(displayCity);
  axios.get(apiUrlHourly).then(nextHourSearchWeather);
}
initialCity("New York");

// next day weather buttons
let button0 = document.querySelector("#current-day");
let button1 = document.querySelector("#button-day1");
let button2 = document.querySelector("#button-day2");
let button3 = document.querySelector("#button-day3");
let button4 = document.querySelector("#button-day4");
let button5 = document.querySelector("#button-day5");
let tableDay0 = document.querySelector("#table-button0");
let tableDay1 = document.querySelector("#table-button1");
let tableDay2 = document.querySelector("#table-button2");
let tableDay3 = document.querySelector("#table-button3");
let tableDay4 = document.querySelector("#table-button4");
let tableDay5 = document.querySelector("#table-button5");
let tableDayHour0 = document.querySelector("#current-hour");
let tableDayHour1 = document.querySelector("#current-hour1");
let tableDayHour2 = document.querySelector("#current-hour2");
let tableDayHour3 = document.querySelector("#current-hour3");
let tableDayHour4 = document.querySelector("#current-hour4");
let tableDayHour5 = document.querySelector("#current-hour5");
let tableDayEmoji0 = document.querySelector("#main-emoji");
let tableDayEmoji1 = document.querySelector("#emoji1");
let tableDayEmoji2 = document.querySelector("#emoji2");
let tableDayEmoji3 = document.querySelector("#emoji3");
let tableDayEmoji4 = document.querySelector("#emoji4");
let tableDayEmoji5 = document.querySelector("#emoji5");
let tableDayTemp0 = document.querySelector("#today-temperature-table");
let tableDayTemp1 = document.querySelector("#next-hour-temp-1");
let tableDayTemp2 = document.querySelector("#next-hour-temp-2");
let tableDayTemp3 = document.querySelector("#next-hour-temp-3");
let tableDayTemp4 = document.querySelector("#next-hour-temp-4");
let tableDayTemp5 = document.querySelector("#next-hour-temp-5");
let tableDayWind0 = document.querySelector("#tableSpeedWind0");
let tableDayWind1 = document.querySelector("#tableSpeedWind1");
let tableDayWind2 = document.querySelector("#tableSpeedWind2");
let tableDayWind3 = document.querySelector("#tableSpeedWind3");
let tableDayWind4 = document.querySelector("#tableSpeedWind4");
let tableDayWind5 = document.querySelector("#tableSpeedWind5");
let tableDayHumidity0 = document.querySelector("#tableHumidity0");
let tableDayHumidity1 = document.querySelector("#tableHumidity1");
let tableDayHumidity2 = document.querySelector("#tableHumidity2");
let tableDayHumidity3 = document.querySelector("#tableHumidity3");
let tableDayHumidity4 = document.querySelector("#tableHumidity4");
let tableDayHumidity5 = document.querySelector("#tableHumidity5");

function showWeatherForecastNextDay0(event) {
  button0.classList.add("button-today");
  button1.classList.remove("button-today");
  button2.classList.remove("button-today");
  button3.classList.remove("button-today");
  button4.classList.remove("button-today");
  button5.classList.remove("button-today");
  tableDay0.classList.add("today");
  tableDay1.classList.remove("today");
  tableDay2.classList.remove("today");
  tableDay3.classList.remove("today");
  tableDay4.classList.remove("today");
  tableDay5.classList.remove("today");
  tableDayHour0.classList.add("today");
  tableDayHour1.classList.remove("today");
  tableDayHour2.classList.remove("today");
  tableDayHour3.classList.remove("today");
  tableDayHour4.classList.remove("today");
  tableDayHour5.classList.remove("today");
  tableDayEmoji0.classList.add("today");
  tableDayEmoji1.classList.remove("today");
  tableDayEmoji2.classList.remove("today");
  tableDayEmoji3.classList.remove("today");
  tableDayEmoji4.classList.remove("today");
  tableDayEmoji5.classList.remove("today");
  tableDayTemp0.classList.add("today");
  tableDayTemp1.classList.remove("today");
  tableDayTemp2.classList.remove("today");
  tableDayTemp3.classList.remove("today");
  tableDayTemp4.classList.remove("today");
  tableDayTemp5.classList.remove("today");
  tableDayWind0.classList.add("today");
  tableDayWind1.classList.remove("today");
  tableDayWind2.classList.remove("today");
  tableDayWind3.classList.remove("today");
  tableDayWind4.classList.remove("today");
  tableDayWind5.classList.remove("today");
  tableDayHumidity0.classList.add("today");
  tableDayHumidity1.classList.remove("today");
  tableDayHumidity2.classList.remove("today");
  tableDayHumidity3.classList.remove("today");
  tableDayHumidity4.classList.remove("today");
  tableDayHumidity5.classList.remove("today");
}
function showWeatherForecastNextDay1(event) {
  button0.classList.remove("button-today");
  button1.classList.add("button-today");
  button2.classList.remove("button-today");
  button3.classList.remove("button-today");
  button4.classList.remove("button-today");
  button5.classList.remove("button-today");
  tableDay0.classList.remove("today");
  tableDay1.classList.add("today");
  tableDay2.classList.remove("today");
  tableDay3.classList.remove("today");
  tableDay4.classList.remove("today");
  tableDay5.classList.remove("today");
  tableDayHour0.classList.remove("today");
  tableDayHour1.classList.add("today");
  tableDayHour2.classList.remove("today");
  tableDayHour3.classList.remove("today");
  tableDayHour4.classList.remove("today");
  tableDayHour5.classList.remove("today");
  tableDayEmoji0.classList.remove("today");
  tableDayEmoji1.classList.add("today");
  tableDayEmoji2.classList.remove("today");
  tableDayEmoji3.classList.remove("today");
  tableDayEmoji4.classList.remove("today");
  tableDayEmoji5.classList.remove("today");
  tableDayTemp0.classList.remove("today");
  tableDayTemp1.classList.add("today");
  tableDayTemp2.classList.remove("today");
  tableDayTemp3.classList.remove("today");
  tableDayTemp4.classList.remove("today");
  tableDayTemp5.classList.remove("today");
  tableDayWind0.classList.remove("today");
  tableDayWind1.classList.add("today");
  tableDayWind2.classList.remove("today");
  tableDayWind3.classList.remove("today");
  tableDayWind4.classList.remove("today");
  tableDayWind5.classList.remove("today");
  tableDayHumidity0.classList.remove("today");
  tableDayHumidity1.classList.add("today");
  tableDayHumidity2.classList.remove("today");
  tableDayHumidity3.classList.remove("today");
  tableDayHumidity4.classList.remove("today");
  tableDayHumidity5.classList.remove("today");
}

function showWeatherForecastNextDay2(event) {
  button0.classList.remove("button-today");
  button1.classList.remove("button-today");
  button2.classList.add("button-today");
  button3.classList.remove("button-today");
  button4.classList.remove("button-today");
  button5.classList.remove("button-today");
  tableDay0.classList.remove("today");
  tableDay1.classList.remove("today");
  tableDay2.classList.add("today");
  tableDay3.classList.remove("today");
  tableDay4.classList.remove("today");
  tableDay5.classList.remove("today");
  tableDayHour0.classList.remove("today");
  tableDayHour1.classList.remove("today");
  tableDayHour2.classList.add("today");
  tableDayHour3.classList.remove("today");
  tableDayHour4.classList.remove("today");
  tableDayHour5.classList.remove("today");
  tableDayEmoji0.classList.remove("today");
  tableDayEmoji1.classList.remove("today");
  tableDayEmoji2.classList.add("today");
  tableDayEmoji3.classList.remove("today");
  tableDayEmoji4.classList.remove("today");
  tableDayEmoji5.classList.remove("today");
  tableDayTemp0.classList.remove("today");
  tableDayTemp1.classList.remove("today");
  tableDayTemp2.classList.add("today");
  tableDayTemp3.classList.remove("today");
  tableDayTemp4.classList.remove("today");
  tableDayTemp5.classList.remove("today");
  tableDayWind0.classList.remove("today");
  tableDayWind1.classList.remove("today");
  tableDayWind2.classList.add("today");
  tableDayWind3.classList.remove("today");
  tableDayWind4.classList.remove("today");
  tableDayWind5.classList.remove("today");
  tableDayHumidity0.classList.remove("today");
  tableDayHumidity1.classList.remove("today");
  tableDayHumidity2.classList.add("today");
  tableDayHumidity3.classList.remove("today");
  tableDayHumidity4.classList.remove("today");
  tableDayHumidity5.classList.remove("today");
}

function showWeatherForecastNextDay3(event) {
  button0.classList.remove("button-today");
  button1.classList.remove("button-today");
  button2.classList.remove("button-today");
  button3.classList.add("button-today");
  button4.classList.remove("button-today");
  button5.classList.remove("button-today");
  tableDay0.classList.remove("today");
  tableDay1.classList.remove("today");
  tableDay2.classList.remove("today");
  tableDay3.classList.add("today");
  tableDay4.classList.remove("today");
  tableDay5.classList.remove("today");
  tableDayHour0.classList.remove("today");
  tableDayHour1.classList.remove("today");
  tableDayHour2.classList.remove("today");
  tableDayHour3.classList.add("today");
  tableDayHour4.classList.remove("today");
  tableDayHour5.classList.remove("today");
  tableDayEmoji0.classList.remove("today");
  tableDayEmoji1.classList.remove("today");
  tableDayEmoji2.classList.remove("today");
  tableDayEmoji3.classList.add("today");
  tableDayEmoji4.classList.remove("today");
  tableDayEmoji5.classList.remove("today");
  tableDayTemp0.classList.remove("today");
  tableDayTemp1.classList.remove("today");
  tableDayTemp2.classList.remove("today");
  tableDayTemp3.classList.add("today");
  tableDayTemp4.classList.remove("today");
  tableDayTemp5.classList.remove("today");
  tableDayWind0.classList.remove("today");
  tableDayWind1.classList.remove("today");
  tableDayWind2.classList.remove("today");
  tableDayWind3.classList.add("today");
  tableDayWind4.classList.remove("today");
  tableDayWind5.classList.remove("today");
  tableDayHumidity0.classList.remove("today");
  tableDayHumidity1.classList.remove("today");
  tableDayHumidity2.classList.remove("today");
  tableDayHumidity3.classList.add("today");
  tableDayHumidity4.classList.remove("today");
  tableDayHumidity5.classList.remove("today");
}

function showWeatherForecastNextDay4(event) {
  button0.classList.remove("button-today");
  button1.classList.remove("button-today");
  button2.classList.remove("button-today");
  button3.classList.remove("button-today");
  button4.classList.add("button-today");
  button5.classList.remove("button-today");
  tableDay0.classList.remove("today");
  tableDay1.classList.remove("today");
  tableDay2.classList.remove("today");
  tableDay3.classList.remove("today");
  tableDay4.classList.add("today");
  tableDay5.classList.remove("today");
  tableDayHour0.classList.remove("today");
  tableDayHour1.classList.remove("today");
  tableDayHour2.classList.remove("today");
  tableDayHour3.classList.remove("today");
  tableDayHour4.classList.add("today");
  tableDayHour5.classList.remove("today");
  tableDayEmoji0.classList.remove("today");
  tableDayEmoji1.classList.remove("today");
  tableDayEmoji2.classList.remove("today");
  tableDayEmoji3.classList.remove("today");
  tableDayEmoji4.classList.add("today");
  tableDayEmoji5.classList.remove("today");
  tableDayTemp0.classList.remove("today");
  tableDayTemp1.classList.remove("today");
  tableDayTemp2.classList.remove("today");
  tableDayTemp3.classList.remove("today");
  tableDayTemp4.classList.add("today");
  tableDayTemp5.classList.remove("today");
  tableDayWind0.classList.remove("today");
  tableDayWind1.classList.remove("today");
  tableDayWind2.classList.remove("today");
  tableDayWind3.classList.remove("today");
  tableDayWind4.classList.add("today");
  tableDayWind5.classList.remove("today");
  tableDayHumidity0.classList.remove("today");
  tableDayHumidity1.classList.remove("today");
  tableDayHumidity2.classList.remove("today");
  tableDayHumidity3.classList.remove("today");
  tableDayHumidity4.classList.add("today");
  tableDayHumidity5.classList.remove("today");
}

function showWeatherForecastNextDay5(event) {
  button0.classList.remove("button-today");
  button1.classList.remove("button-today");
  button2.classList.remove("button-today");
  button3.classList.remove("button-today");
  button4.classList.remove("button-today");
  button5.classList.add("button-today");
  tableDay0.classList.remove("today");
  tableDay1.classList.remove("today");
  tableDay2.classList.remove("today");
  tableDay3.classList.remove("today");
  tableDay4.classList.remove("today");
  tableDay5.classList.add("today");
  tableDayHour0.classList.remove("today");
  tableDayHour1.classList.remove("today");
  tableDayHour2.classList.remove("today");
  tableDayHour3.classList.remove("today");
  tableDayHour4.classList.remove("today");
  tableDayHour5.classList.add("today");
  tableDayEmoji0.classList.remove("today");
  tableDayEmoji1.classList.remove("today");
  tableDayEmoji2.classList.remove("today");
  tableDayEmoji3.classList.remove("today");
  tableDayEmoji4.classList.remove("today");
  tableDayEmoji5.classList.add("today");
  tableDayTemp0.classList.remove("today");
  tableDayTemp1.classList.remove("today");
  tableDayTemp2.classList.remove("today");
  tableDayTemp3.classList.remove("today");
  tableDayTemp4.classList.remove("today");
  tableDayTemp5.classList.add("today");
  tableDayWind0.classList.remove("today");
  tableDayWind1.classList.remove("today");
  tableDayWind2.classList.remove("today");
  tableDayWind3.classList.remove("today");
  tableDayWind4.classList.remove("today");
  tableDayWind5.classList.add("today");
  tableDayHumidity0.classList.remove("today");
  tableDayHumidity1.classList.remove("today");
  tableDayHumidity2.classList.remove("today");
  tableDayHumidity3.classList.remove("today");
  tableDayHumidity4.classList.remove("today");
  tableDayHumidity5.classList.add("today");
}
