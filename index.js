const apikey = '1db2e988df83cfadcd8febede4133b84';
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");

async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  const data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".tem").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  if(data.weather[0].main==="clouds"){
    weathericon.src="images/clouds.png";
  }
  else if(data.weather[0].main==="clear"){
    weathericon.src="images/clear.png";

  }
  else if(data.weather[0].main==="rain"){
    weathericon.src="images/rain.png";
}
else if(data.weather[0].main==="Drizzle"){
    weathericon.src="images/drizzle.png";
}
else if(data.weather[0].main==="mist"){
    weathericon.src="images/mist.png";
}
}

searchbtn.addEventListener("click", () => {
  checkweather(searchbox.value);
});
