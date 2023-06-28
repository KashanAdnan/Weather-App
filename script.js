function search() {
  const APIKey = "ff08c228b6dffa084712f0b23a4ad6c9";
  const city = document.getElementById("location").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.cod === "404") {
        document.querySelector(".error").classList.remove("none");
      } else {
        const weather_box = document
          .querySelector(".weather-box")
          .classList.remove("none");
        document.getElementById("main").innerText = json.weather[0].main;
        document.getElementById("temp").innerText = `${json.main.temp}°C`;
        document.getElementById("humidity").innerText = `${json.main.humidity}`;
        document.getElementById("feels").innerText = `${json.main.feels_like}`;
        switch (json.weather[0].main) {
          case "Clouds":
            document.getElementById("icon").src = "./images/cloud.png";
            break;
          case "Mist":
            document.getElementById("icon").src = "./images/mist.png";
            break;
          case "Clouds":
            document.getElementById("icon").src = "./images/cloud.png";
            break;
          case "Haze":
            document.getElementById("icon").src = "./images/rain.png";
            break;

          default:
            break;
        }
      }
    });
}
