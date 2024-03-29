let cityId = 5604473
let apiKey = "e29e92b4b8a58175872ada937b0ffb2d"


const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=imperial&appid=${apiKey}`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {


    document.getElementById('current-temp').textContent = jsObject.main.temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);

  });
