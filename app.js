const mainF = (function () {
  const weatherData = async function (city) {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c3feba4e1d4530a1af20a50c4c537a34`,
      {
        mode: "cors",
      }
    );
    try {
      const getData = await response.json();
      console.log(getData);
      return getData;
    } catch {
      console.log(error);
    }
  };

  const domData = async function (city) {
    const temp = city.main.temp;
    const feels = city.weather[0].description;
    const icon = city.weather[0].icon;
    const sunrise = city.sys.sunrise;
    const getSunrise = document.getElementById("sunrise");
    const symbol = document.getElementById("symbol");
    const desc = document.getElementById("desc");
    const tempC = document.getElementById("temp");
    var date = new Date(sunrise * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formattedTime = hours + ":" + minutes.substr(-2) + ":";

    getSunrise.innerText = `Sunrise : ${formattedTime}AM`;
    symbol.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    if (temp < 5) {
      desc.innerText = `${feels},this is freaking Cold my man!`;
    } else if (temp > 10 && temp < 30) {
      desc.innerText = `${feels},this is the perfect weather in my modest oppinion!`;
    } else {
      desc.innerText = feels;
      tempC.innerText = temp;
    }
    const switchTemp = document.getElementById("switch");
    switchTemp.addEventListener("click", function () {
      desc.innerText = "WAAAAAAAH";
    });
  };

  return { weatherData, domData };
})();

mainF.weatherData("Vienna");

window.onload = function () {
  const submitCity = document.getElementById("submit-city");
  submitCity.addEventListener("click", async function (e) {
    e.preventDefault();
    const city = document.getElementById("searchCity");
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=c3feba4e1d4530a1af20a50c4c537a34`
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        mainF.domData(data);
      });
  });
};
