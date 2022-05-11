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

  function currentSearchTemperatureFahrenheit() {
    let searchCurrentDegreeFahrenheit =
      document.querySelector("#today-temperature");
    let searchCurrentDegreeFahrenheitTable = document.querySelector(
      "#today-temperature-table"
    );

    searchCurrentDegreeFahrenheitTable.innerHTML =
      searchCurrentDegreeFahrenheit.innerHTML = `${fTempConvert}°F`;
  }
  let toFTempConvert = (temperature * 9) / 5 + 32;
  let fTempConvert = Math.round(toFTempConvert);
  let toCTempConvert = ((fTempConvert - 32) * 5) / 9;
  let cTempConvert = Math.round(toCTempConvert);
  let searchButtonDegreeFahrenheit = document.querySelector(".fahrenheit");
  searchButtonDegreeFahrenheit.addEventListener(
    "click",
    currentSearchTemperatureFahrenheit
  );

  function currentSearchTemperatureCelsius() {
    let searchCurrentDegreeCelsius =
      document.querySelector("#today-temperature");
    let searchCurrentDegreeCelsiusTable = document.querySelector(
      "#today-temperature-table"
    );

    searchCurrentDegreeCelsiusTable.innerHTML =
      searchCurrentDegreeCelsius.innerHTML = `${cTempConvert}°C`;
  }
  let searchButtonDegreeCelsius = document.querySelector(".celsius");
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
  } else if (response.data.weather[0].description === "scattered clouds") {
    mainEmoji.innerHTML = `<img src="media/broken clouds by Luna Smith.png"  alt="broken clouds emoji by Luna Smith" width="50" / >`;
  } else if (response.data.weather[0].description === "broken clouds") {
    mainEmoji.innerHTML = `<img src="media/broken clouds by Luna Smith.png"  alt="broken clouds emoji by Luna Smith" width="50" / >`;
  } else if (response.data.weather[0].description === "smoke") {
    mainEmoji.innerHTML = `<img src="media/smoke by Luna Smith.png"  alt="smoke emoji by Luna Smith" width="50"/ >`;
  } else if (response.data.weather[0].description === "light rain") {
    mainEmoji.innerHTML = `<img src="media/light rain by Luna Smith.png"  alt="light rain emoji by Luna Smith" width="50" / >`;
  } else if (response.data.weather[0].description === "mist") {
    mainEmoji.innerHTML = `<img src="media/mist by Luna Smith.png"  alt="mist emoji by Luna Smith" width="50"/ >`;
  } else if (response.data.weather[0].description === "heavy rain") {
    mainEmoji.innerHTML = `<img src="media/rain by Luna Smith.png"  alt="rain emoji by Luna Smith" width="50" / >`;
  } else if (response.data.weather[0].description === "heavy intensity rain") {
    mainEmoji.innerHTML = `<img src="media/rain by Luna Smith.png"  alt="rain emoji by Luna Smith" width="50" / >`;
  } else if (response.data.weather[0].description === "moderate rain") {
    mainEmoji.innerHTML = `<img src="media/rain by Luna Smith.png"  alt="rain emoji by Luna Smith" width="50" / >`;
  } else if (response.data.weather[0].description === "storm") {
    mainEmoji.innerHTML = `<img src="media/thunder by Luna Smith.png"  alt="thunder emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[0].weather[0].description === "snow") {
    mainEmoji.innerHTML = `<img src="media/snow by Luna Smith.png"  alt="snow emoji by Luna Smith" width="50" / >`;
  }
}

function humiditySearchCity(response) {
  let currentHumidity = document.querySelector("#today-rain");
  currentHumidity.innerHTML = Math.round(response.data.main.humidity);
}
function nextHourSearchWeather(response) {
  let day1Emoji = document.querySelector("#emoji1");
  if (response.data.list[1].weather[0].description === "overcast clouds") {
    day1Emoji.innerHTML = `<img src="media/clouds by Luna Smith.png"  alt="clouds emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[1].weather[0].description === "clear sky") {
    day1Emoji.innerHTML = `<img src="media/sunny by Luna Smith.png"  alt="sunny emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[1].weather[0].description === "few clouds") {
    day1Emoji.innerHTML = `<img src="media/partly sunny by Luna Smith.png"  alt="partly sunny emoji by Luna Smith" width="50" / >`;
  } else if (
    response.data.list[1].weather[0].description === "scattered clouds"
  ) {
    day1Emoji.innerHTML = `<img src="media/broken clouds by Luna Smith.png"  alt="broken clouds emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[1].weather[0].description === "broken clouds") {
    day1Emoji.innerHTML = `<img src="media/broken clouds by Luna Smith.png"  alt="broken clouds emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[1].weather[0].description === "smoke") {
    day1Emoji.innerHTML = `<img src="media/smoke by Luna Smith.png"  alt="smoke emoji by Luna Smith" width="50"/ >`;
  } else if (response.data.list[1].weather[0].description === "light rain") {
    day1Emoji.innerHTML = `<img src="media/light rain by Luna Smith.png"  alt="light rain emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[1].weather[0].description === "mist") {
    day1Emoji.innerHTML = `<img src="media/mist by Luna Smith.png"  alt="mist emoji by Luna Smith" width="50"/ >`;
  } else if (response.data.list[1].weather[0].description === "heavy rain") {
    day1Emoji.innerHTML = `<img src="media/rain by Luna Smith.png"  alt="rain emoji by Luna Smith" width="50" / >`;
  } else if (
    response.data.list[1].weather[0].description === "heavy intensity rain"
  ) {
    day1Emoji.innerHTML = `<img src="media/rain by Luna Smith.png"  alt="rain emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[1].weather[0].description === "moderate rain") {
    day1Emoji.innerHTML = `<img src="media/rain by Luna Smith.png"  alt="rain emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[1].weather[0].description === "storm") {
    day1Emoji.innerHTML = `<img src="media/thunder by Luna Smith.png"  alt="thunder emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[1].weather[0].description === "snow") {
    day1Emoji.innerHTML = `<img src="media/snow by Luna Smith.png"  alt="snow emoji by Luna Smith" width="50" / >`;
  }
  let day2Emoji = document.querySelector("#emoji2");
  if (response.data.list[2].weather[0].description === "overcast clouds") {
    day2Emoji.innerHTML = `<img src="media/clouds by Luna Smith.png"  alt="clouds emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[2].weather[0].description === "clear sky") {
    day2Emoji.innerHTML = `<img src="media/sunny by Luna Smith.png"  alt="sunny emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[2].weather[0].description === "few clouds") {
    day2Emoji.innerHTML = `<img src="media/partly sunny by Luna Smith.png"  alt="partly sunny emoji by Luna Smith" width="50" / >`;
  } else if (
    response.data.list[2].weather[0].description === "scattered clouds"
  ) {
    day2Emoji.innerHTML = `<img src="media/broken clouds by Luna Smith.png"  alt="broken clouds emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[2].weather[0].description === "broken clouds") {
    day2Emoji.innerHTML = `<img src="media/broken clouds by Luna Smith.png"  alt="broken clouds emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[2].weather[0].description === "smoke") {
    day2Emoji.innerHTML = `<img src="media/smoke by Luna Smith.png"  alt="smoke emoji by Luna Smith" width="50"/ >`;
  } else if (response.data.list[2].weather[0].description === "light rain") {
    day2Emoji.innerHTML = `<img src="media/light rain by Luna Smith.png"  alt="light rain emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[2].weather[0].description === "mist") {
    day2Emoji.innerHTML = `<img src="media/mist by Luna Smith.png"  alt="mist emoji by Luna Smith" width="50"/ >`;
  } else if (response.data.list[2].weather[0].description === "heavy rain") {
    day2Emoji.innerHTML = `<img src="media/rain by Luna Smith.png"  alt="rain emoji by Luna Smith" width="50" / >`;
  } else if (
    response.data.list[2].weather[0].description === "heavy intensity rain"
  ) {
    day2Emoji.innerHTML = `<img src="media/rain by Luna Smith.png"  alt="rain emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[2].weather[0].description === "moderate rain") {
    day2Emoji.innerHTML = `<img src="media/rain by Luna Smith.png"  alt="rain emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[2].weather[0].description === "storm") {
    day2Emoji.innerHTML = `<img src="media/thunder by Luna Smith.png"  alt="thunder emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[2].weather[0].description === "snow") {
    day2Emoji.innerHTML = `<img src="media/snow by Luna Smith.png"  alt="snow emoji by Luna Smith" width="50" / >`;
  }
  let day3Emoji = document.querySelector("#emoji3");
  if (response.data.list[3].weather[0].description === "overcast clouds") {
    day3Emoji.innerHTML = `<img src="media/clouds by Luna Smith.png"  alt="clouds emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[3].weather[0].description === "clear sky") {
    day3Emoji.innerHTML = `<img src="media/sunny by Luna Smith.png"  alt="sunny emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[3].weather[0].description === "few clouds") {
    day3Emoji.innerHTML = `<img src="media/partly sunny by Luna Smith.png"  alt="partly sunny emoji by Luna Smith" width="50" / >`;
  } else if (
    response.data.list[3].weather[0].description === "scattered clouds"
  ) {
    day3Emoji.innerHTML = `<img src="media/broken clouds by Luna Smith.png"  alt="broken clouds emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[3].weather[0].description === "broken clouds") {
    day3Emoji.innerHTML = `<img src="media/broken clouds by Luna Smith.png"  alt="broken clouds emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[3].weather[0].description === "smoke") {
    day3Emoji.innerHTML = `<img src="media/smoke by Luna Smith.png"  alt="smoke emoji by Luna Smith" width="50"/ >`;
  } else if (response.data.list[3].weather[0].description === "light rain") {
    day3Emoji.innerHTML = `<img src="media/light rain by Luna Smith.png"  alt="light rain emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[3].weather[0].description === "mist") {
    day3Emoji.innerHTML = `<img src="media/mist by Luna Smith.png"  alt="mist emoji by Luna Smith" width="50"/ >`;
  } else if (response.data.list[3].weather[0].description === "heavy rain") {
    day3Emoji.innerHTML = `<img src="media/rain by Luna Smith.png"  alt="rain emoji by Luna Smith" width="50" / >`;
  } else if (
    response.data.list[3].weather[0].description === "heavy intensity rain"
  ) {
    day3Emoji.innerHTML = `<img src="media/rain by Luna Smith.png"  alt="rain emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[3].weather[0].description === "moderate rain") {
    day3Emoji.innerHTML = `<img src="media/rain by Luna Smith.png"  alt="rain emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[3].weather[0].description === "storm") {
    day3Emoji.innerHTML = `<img src="media/thunder by Luna Smith.png"  alt="thunder emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[3].weather[0].description === "snow") {
    day3Emoji.innerHTML = `<img src="media/snow by Luna Smith.png"  alt="snow emoji by Luna Smith" width="50" / >`;
  }
  let day4Emoji = document.querySelector("#emoji4");
  if (response.data.list[4].weather[0].description === "overcast clouds") {
    day4Emoji.innerHTML = `<img src="media/clouds by Luna Smith.png"  alt="clouds emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[4].weather[0].description === "clear sky") {
    day4Emoji.innerHTML = `<img src="media/sunny by Luna Smith.png"  alt="sunny emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[4].weather[0].description === "few clouds") {
    day4Emoji.innerHTML = `<img src="media/partly sunny by Luna Smith.png"  alt="partly sunny emoji by Luna Smith" width="50" / >`;
  } else if (
    response.data.list[4].weather[0].description === "scattered clouds"
  ) {
    day4Emoji.innerHTML = `<img src="media/broken clouds by Luna Smith.png"  alt="broken clouds emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[4].weather[0].description === "broken clouds") {
    day4Emoji.innerHTML = `<img src="media/broken clouds by Luna Smith.png"  alt="broken clouds emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[4].weather[0].description === "smoke") {
    day4Emoji.innerHTML = `<img src="media/smoke by Luna Smith.png"  alt="smoke emoji by Luna Smith" width="50"/ >`;
  } else if (response.data.list[4].weather[0].description === "light rain") {
    day4Emoji.innerHTML = `<img src="media/light rain by Luna Smith.png"  alt="light rain emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[4].weather[0].description === "mist") {
    day4Emoji.innerHTML = `<img src="media/mist by Luna Smith.png"  alt="mist emoji by Luna Smith" width="50"/ >`;
  } else if (response.data.list[4].weather[0].description === "heavy rain") {
    day4Emoji.innerHTML = `<img src="media/rain by Luna Smith.png"  alt="rain emoji by Luna Smith" width="50" / >`;
  } else if (
    response.data.list[4].weather[0].description === "heavy intensity rain"
  ) {
    day4Emoji.innerHTML = `<img src="media/rain by Luna Smith.png"  alt="rain emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[4].weather[0].description === "moderate rain") {
    day4Emoji.innerHTML = `<img src="media/rain by Luna Smith.png"  alt="rain emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[4].weather[0].description === "storm") {
    day4Emoji.innerHTML = `<img src="media/thunder by Luna Smith.png"  alt="thunder emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[4].weather[0].description === "snow") {
    day4Emoji.innerHTML = `<img src="media/snow by Luna Smith.png"  alt="snow emoji by Luna Smith" width="50" / >`;
  }
  let day5Emoji = document.querySelector("#emoji5");
  if (response.data.list[5].weather[0].description === "overcast clouds") {
    day5Emoji.innerHTML = `<img src="media/clouds by Luna Smith.png"  alt="clouds emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[5].weather[0].description === "clear sky") {
    day5Emoji.innerHTML = `<img src="media/sunny by Luna Smith.png"  alt="sunny emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[5].weather[0].description === "few clouds") {
    day5Emoji.innerHTML = `<img src="media/partly sunny by Luna Smith.png"  alt="partly sunny emoji by Luna Smith" width="50" / >`;
  } else if (
    response.data.list[5].weather[0].description === "scattered clouds"
  ) {
    day5Emoji.innerHTML = `<img src="media/broken clouds by Luna Smith.png"  alt="broken clouds emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[5].weather[0].description === "broken clouds") {
    day5Emoji.innerHTML = `<img src="media/broken clouds by Luna Smith.png"  alt="broken clouds emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[5].weather[0].description === "smoke") {
    day5Emoji.innerHTML = `<img src="media/smoke by Luna Smith.png"  alt="smoke emoji by Luna Smith" width="50"/ >`;
  } else if (response.data.list[5].weather[0].description === "light rain") {
    day5Emoji.innerHTML = `<img src="media/light rain by Luna Smith.png"  alt="light rain emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[5].weather[0].description === "mist") {
    day5Emoji.innerHTML = `<img src="media/mist by Luna Smith.png"  alt="mist emoji by Luna Smith" width="50"/ >`;
  } else if (response.data.list[5].weather[0].description === "heavy rain") {
    day5Emoji.innerHTML = `<img src="media/rain by Luna Smith.png"  alt="rain emoji by Luna Smith" width="50" / >`;
  } else if (
    response.data.list[5].weather[0].description === "heavy intensity rain"
  ) {
    day5Emoji.innerHTML = `<img src="media/rain by Luna Smith.png"  alt="rain emoji by Luna Smith" width="50" / >`;
  } else if (
    response.data.list[5].weather[0].descriptionn === "moderate rain"
  ) {
    day5Emoji.innerHTML = `<img src="media/rain by Luna Smith.png"  alt="rain emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[5].weather[0].description === "storm") {
    day5Emoji.innerHTML = `<img src="media/thunder by Luna Smith.png"  alt="thunder emoji by Luna Smith" width="50" / >`;
  } else if (response.data.list[5].weather[0].description === "snow") {
    day5Emoji.innerHTML = `<img src="media/snow by Luna Smith.png"  alt="snow emoji by Luna Smith" width="50" / >`;
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
  }
  let currentDegreeFahrenheit = document.querySelector(".fahrenheit");
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
  }
  let currentDegreeCelsius = document.querySelector(".celsius");
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

// next day weather

function showWeatherForecastNextDay0(event) {
  document.querySelector("#current-day").style.color = "#711a75";
  document.querySelector("#button-day1").style.color = "white";
  document.querySelector("#button-day2").style.color = "white";
  document.querySelector("#button-day3").style.color = "white";
  document.querySelector("#button-day4").style.color = "white";
  document.querySelector("#button-day5").style.color = "white";
}
function showWeatherForecastNextDay1(event) {
  document.querySelector("#current-day").style.color = "white";
  document.querySelector("#button-day1").style.color = "#711a75";
  document.querySelector("#button-day2").style.color = "white";
  document.querySelector("#button-day3").style.color = "white";
  document.querySelector("#button-day4").style.color = "white";
  document.querySelector("#button-day5").style.color = "white";
}

function showWeatherForecastNextDay2(event) {
  document.querySelector("#current-day").style.color = "white";
  document.querySelector("#button-day1").style.color = "white";
  document.querySelector("#button-day2").style.color = "#711a75";
  document.querySelector("#button-day3").style.color = "white";
  document.querySelector("#button-day4").style.color = "white";
  document.querySelector("#button-day5").style.color = "white";
}

function showWeatherForecastNextDay3(event) {
  document.querySelector("#current-day").style.color = "white";
  document.querySelector("#button-day1").style.color = "white";
  document.querySelector("#button-day2").style.color = "white";
  document.querySelector("#button-day3").style.color = "#711a75";
  document.querySelector("#button-day4").style.color = "white";
  document.querySelector("#button-day5").style.color = "white";
}

function showWeatherForecastNextDay4(event) {
  document.querySelector("#current-day").style.color = "white";
  document.querySelector("#button-day1").style.color = "white";
  document.querySelector("#button-day2").style.color = "white";
  document.querySelector("#button-day3").style.color = "white";
  document.querySelector("#button-day4").style.color = "#711a75";
  document.querySelector("#button-day5").style.color = "white";
}

function showWeatherForecastNextDay5(event) {
  document.querySelector("#current-day").style.color = "white";
  document.querySelector("#button-day1").style.color = "white";
  document.querySelector("#button-day2").style.color = "white";
  document.querySelector("#button-day3").style.color = "white";
  document.querySelector("#button-day4").style.color = "white";
  document.querySelector("#button-day5").style.color = "#711a75";
}
