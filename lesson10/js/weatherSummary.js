let cityId = 5604473
let apiKey = "e29e92b4b8a58175872ada937b0ffb2d"


const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=imperial&appid=${apiKey}`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);


    

  });
