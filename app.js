const weatherData = async function (city) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c3feba4e1d4530a1af20a50c4c537a34`,
    {
      mode: "cors",
    }
  );
};
