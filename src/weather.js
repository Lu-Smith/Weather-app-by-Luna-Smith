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
  let bodyElement = document.querySelector("#night-theme");

  if (hour >= 5 && hour < 8) {
    imageElement.setAttribute("src", `media/sunrise by Luna Smith.jpg`);
    bodyElement.style.background =
      "linear-gradient(68.6deg, rgb(252, 165, 241) 1.8%, rgb(181, 255, 255) 100.5%)";
  } else if (hour >= 8 && hour < 18) {
    imageElement.setAttribute("src", `media/day by Luna Smith.jpg`);
    bodyElement.style.background =
      "linear-gradient(120deg, #e0c3fc 0%, #86E8F3 100%)";
  } else if (hour >= 18 && hour < 21) {
    imageElement.setAttribute("src", `media/sunset by Luna Smith.jpg`);
    bodyElement.style.background =
      "linear-gradient(to right, #C33923, #EBB31B)";
  } else if (hour >= 21 && hour < 23) {
    imageElement.setAttribute("src", `media/thunder by Luna Smith.jpg`);
    bodyElement.style.background =
      "linear-gradient(95deg, rgb(52, 7, 63) 10%, rgb(15, 1, 29) 100%)";
  } else {
    imageElement.setAttribute("src", `media/night by Luna Smith.jpg`);
    bodyElement.style.background =
      "linear-gradient(112.1deg, #090F29 11.4%, #0D1336 70.2%)";
  }
}
currentTime();

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
  let toCTempConvert = ((toFTempConvert - 32) * 5) / 9;
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
  getForecast(response.data.coord);
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
  let bodyElement = document.querySelector("#night-theme");

  if (hour >= 5 && hour < 8) {
    imageElement.setAttribute("src", `media/sunrise by Luna Smith.jpg`);
    bodyElement.style.background =
      "linear-gradient(68.6deg, rgb(252, 165, 241) 1.8%, rgb(181, 255, 255) 100.5%)";
  } else if (hour >= 8 && hour < 18) {
    imageElement.setAttribute("src", `media/day by Luna Smith.jpg`);
    bodyElement.style.background =
      "linear-gradient(120deg, #e0c3fc 0%, #86E8F3 100%)";
  } else if (hour >= 18 && hour < 21) {
    imageElement.setAttribute("src", `media/sunset by Luna Smith.jpg`);
    bodyElement.style.background =
      "linear-gradient(to right, #C33923, #EBB31B)";
  } else if (hour >= 21 && hour < 23) {
    imageElement.setAttribute("src", `media/thunder by Luna Smith.jpg`);
    bodyElement.style.background =
      "linear-gradient(95deg, rgb(52, 7, 63) 10%, rgb(15, 1, 29) 100%)";
  } else {
    imageElement.setAttribute("src", `media/night by Luna Smith.jpg`);
    bodyElement.style.background =
      "linear-gradient(112.1deg, #090F29 11.4%, #0D1336 70.2%)";
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
    response.data.weather[0].main === "Snow" ||
    response.data.weather[0].main === "Squall"
  ) {
    mainEmoji.innerHTML = `<img src="media/snow by Luna Smith.png"  alt="snow emoji by Luna Smith" width="50" / >`;
  } else if (response.data.weather[0].main === "Tornado") {
    mainEmoji.innerHTML = `<img src="media/snow by Luna Smith.png"  alt="tornado emoji by Luna Smith" width="50" / >`;
  }
}

function humiditySearchCity(response) {
  let currentHumidity = document.querySelector("#today-rain");
  currentHumidity.innerHTML = Math.round(response.data.main.humidity);
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
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiUrl = `${apiEndElement}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(emoji);
  axios.get(apiUrl).then(currentSearchTemperature);
  axios.get(apiUrl).then(timeSearchCity);
  axios.get(apiUrl).then(speedWindSearchCity);
  axios.get(apiUrl).then(humiditySearchCity);
  axios.get(apiUrl).then(displayCity);
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
  let units = "metric";
  let apiUrl = `${apiEndElement}q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(emoji);
  axios.get(apiUrl).then(currentSearchTemperature);
  axios.get(apiUrl).then(timeSearchCity);
  axios.get(apiUrl).then(speedWindSearchCity);
  axios.get(apiUrl).then(humiditySearchCity);
  axios.get(apiUrl).then(displayCity);
}

initialCity("New York");

// next day weather look

function getForecast(coordinates) {
  let apiKey = "735bf932678c0291fa1c42303b18350e";
  let apiEndElementDaily = "https://api.openweathermap.org/data/2.5/onecall?";
  let units = "metric";
  let apiUrlDaily = `${apiEndElementDaily}lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrlDaily).then(displayForecast);

  function displayNextDayForecast(event) {
    displayNextDayForecast = function () {};
    event.preventDefault();
    axios.get(apiUrlDaily).then(displayForecast);
  }

  function displayconvertFTemp(event) {
    displayNextDayForecast = function () {};
    event.preventDefault();
    axios.get(apiUrlDaily).then(displayForecastF);
  }

  let convertFButton = document.querySelector("#degree-fahrenheit");
  convertFButton.addEventListener("click", displayconvertFTemp);

  let convertCButton = document.querySelector("#degree-celsius");
  convertCButton.addEventListener("click", displayNextDayForecast);
}

function displayFormatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[day];
}

function displayFormatDate(timestamp) {
  let date = new Date(timestamp * 1000);
  let nextDay = date.getDate();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[date.getMonth()];

  return `${nextDay} ${month}`;
}
function displayEmoji(emojiDescripton) {
  if (emojiDescripton.description === "overcast clouds") {
    return `<img src="media/clouds by Luna Smith.png"  alt="clouds emoji by Luna Smith" width="50" / >`;
  } else if (emojiDescripton.description === "clear sky") {
    return `<img src="media/sunny by Luna Smith.png"  alt="sunny emoji by Luna Smith" width="50" / >`;
  } else if (emojiDescripton.description === "few clouds") {
    return `<img src="media/partly sunny by Luna Smith.png"  alt="partly sunny emoji by Luna Smith" width="50" / >`;
  } else if (
    emojiDescripton.description === "scattered clouds" ||
    emojiDescripton.description === "broken clouds"
  ) {
    return `<img src="media/broken clouds by Luna Smith.png"  alt="broken clouds emoji by Luna Smith" width="50" / >`;
  } else if (
    emojiDescripton.main === "Smoke" ||
    emojiDescripton.main === "Haze"
  ) {
    return `<img src="media/smoke by Luna Smith.png"  alt="smoke emoji by Luna Smith" width="50"/ >`;
  } else if (
    emojiDescripton.main === "Dust" ||
    emojiDescripton.main === "Ash" ||
    emojiDescripton.main === "Sand"
  ) {
    return `<img src="media/sand by Luna Smith.png"  alt="smoke emoji by Luna Smith" width="50"/ >`;
  } else if (
    emojiDescripton.description === "light rain" ||
    emojiDescripton.description === "shower rain" ||
    emojiDescripton.description === " light intensity shower rain" ||
    emojiDescripton.description === " heavy intensity shower rain" ||
    emojiDescripton.description === " ragged shower rain" ||
    emojiDescripton.main === "Drizzle"
  ) {
    return `<img src="media/light rain by Luna Smith.png"  alt="light rain emoji by Luna Smith" width="50" / >`;
  } else if (
    emojiDescripton.description === "mist" ||
    emojiDescripton.description === "fog"
  ) {
    return `<img src="media/mist by Luna Smith.png"  alt="mist emoji by Luna Smith" width="50"/ >`;
  } else if (
    emojiDescripton.description === "heavy rain" ||
    emojiDescripton.description === "heavy intensity rain" ||
    emojiDescripton.description === "very heavy rain" ||
    emojiDescripton.description === "moderate rain" ||
    emojiDescripton.description === "freezing rain"
  ) {
    return `<img src="media/rain by Luna Smith.png"  alt="rain emoji by Luna Smith" width="50" / >`;
  } else if (emojiDescripton.main === "Thunderstorm") {
    return `<img src="media/thunder by Luna Smith.png"  alt="thunder emoji by Luna Smith" width="50" / >`;
  } else if (
    emojiDescripton.main === "Snow" ||
    emojiDescripton.main === "Squall"
  ) {
    return `<img src="media/snow by Luna Smith.png"  alt="snow emoji by Luna Smith" width="50" / >`;
  } else if (emojiDescripton.main === "Tornado") {
    return `<img src="media/snow by Luna Smith.png"  alt="tornado emoji by Luna Smith" width="50" / >`;
  }
}
function displayForecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#row-forecast1");
  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 4) {
      forecastHTML =
        forecastHTML +
        `
               <div class="col day" id="column">
                <div class="main" id="table-button">
                  <button class="button-day button-day" id="button-day">
                    ${displayFormatDay(forecastDay.dt)}
                  </button>
                </div>
                <div class="table-details">
                  <div id="current-hour-table"> ${displayFormatDate(
                    forecastDay.dt
                  )}
                    </div>
                  <div id="emoji">
                    ${displayEmoji(forecastDay.weather[0])}
                  </div>
                  <div class="day-temperature-table" id="next-hour-temp">
                 ${Math.round(forecastDay.temp.day)}°C </div>
                  <div id="tableSpeedWind">
                    🍃<span id="SpeedWind">${Math.round(
                      forecastDay.wind_speed
                    )}</span>
                  </div>
                  <div id="tableHumidity">💧<span id="rain">${
                    forecastDay.humidity
                  }</span>%</div>
                </div>
              </div>`;
    }
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
  displayForecast = function () {};
}

function displayForecastF(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#row-forecast1");
  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 4) {
      forecastHTML =
        forecastHTML +
        `
               <div class="col day" id="column">
                <div class="main" id="table-button">
                  <button class="button-day button-day" id="button-day">
                    ${displayFormatDay(forecastDay.dt)}
                  </button>
                </div>
                <div class="table-details">
                  <div id="current-hour-table"> ${displayFormatDate(
                    forecastDay.dt
                  )}
                    </div>
                  <div id="emoji">
                    ${displayEmoji(forecastDay.weather[0])}
                  </div>
                  <div class="day-temperature-table" id="next-hour-temp">
                 ${Math.round((forecastDay.temp.day * 9) / 5 + 32)}°F </div>
                  <div id="tableSpeedWind">
                    🍃<span id="SpeedWind">${Math.round(
                      forecastDay.wind_speed
                    )}</span>
                  </div>
                  <div id="tableHumidity">💧<span id="rain">${
                    forecastDay.humidity
                  }</span>%</div>
                </div>
              </div>`;
    }
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
  displayForecastF = function () {};
}
