
let cityId = 5604473
let apiKey = "e29e92b4b8a58175872ada937b0ffb2d"
let d= document.getElementById('description')
let temp = document.getElementById('temp')
let highTemp = document.getElementById('high')
let humidity = document.getElementById('humidity')
let speed = document.getElementById('speed')
let windChill = document.getElementById("windChill")


const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=imperial&appid=${apiKey}`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    
    d.textContent = jsObject.list[0].weather[0].description
    temp.textContent = jsObject.list[0].main.temp
    highTemp.textContent = jsObject.list[0].main.temp_max
    humidity.textContent = jsObject.list[0].main.humidity
    speed.textContent = jsObject.list[0].wind.speed

  let s = jsObject.list[0].wind.speed
  let t = jsObject.list[0].main.temp
  const wd = ( s, t) => (35.74 + 0.6215 *t - 35.75 * ( s ** 0.16) + 0.4275 * t* (s** 0.16))
    
  let output = wd(s,t).toFixed(1) 
  
  windChill.textContent = output
    
    
    
  });
