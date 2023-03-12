let currentDate = new Date();
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayOfWeek = daysOfWeek[currentDate.getDay()];
let dayOfMonth = currentDate.getDate();
let suffix = getDaySuffix(dayOfMonth);
let year = currentDate.getFullYear();

function getDaySuffix(day) {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  switch (day % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}

let formattedDate = `${dayOfWeek} ${dayOfMonth}${suffix}, ${year}`;

const url = "https://api.openweathermap.org/data/2.5/weather?lat=5.6037&lon=-0.1870&units=metric&appid=d2f11315e7bfcd167717519acde6e49d";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
      console.log(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(weatherData) {
  let widget = document.querySelector("#widget");

  let currTemp = document.createElement("p");
  let icon = document.createElement("img");
  let desc = document.createElement("figcaption");
  let iconTitle = document.createElement("p");
  let windSpeed = document.createElement("p");
  let windChill = document.createElement("p");

  currTemp.classList.add("temp");
  iconTitle.classList.add("icontitle");

  currTemp.innerHTML = `Current temperature in ${weatherData.name}, Accra is <strong>${weatherData.main.temp.toFixed(0)}</strong> °C`;
  desc.textContent = weatherData.weather[0].description;
  iconTitle.textContent = "Current Condition Icon";
  windSpeed.textContent = `Wind speed: ${weatherData.wind.speed} m/s`;
  
  let windChillValue = "N/A";
  if (weatherData.wind.speed > 0 && weatherData.main.temp < 10) {
    let windSpeedMph = weatherData.wind.speed * 2.23694;
    windChillValue = Math.round(35.74 + (0.6215 * weatherData.main.temp) - (35.75 * Math.pow(windSpeedMph, 0.16)) + (0.4275 * weatherData.main.temp * Math.pow(windSpeedMph, 0.16))) + " °F";
  }
  windChill.textContent = `Wind chill: ${windChillValue}`;

  icon.setAttribute("src", `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`);
  icon.setAttribute("alt", desc);

  widget.appendChild(currTemp);
  widget.appendChild(iconTitle);
  widget.appendChild(icon);
  widget.appendChild(desc);
  widget.appendChild(windSpeed);
  widget.appendChild(windChill);
}
