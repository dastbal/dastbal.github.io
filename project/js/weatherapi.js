let lat = -2.123589
let lon = -79.887738
let apikey = "e29e92b4b8a58175872ada937b0ffb2d"


const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=${apikey}`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject)
    
let description = document.createElement('p')
let temperature = document.createElement('p')
let  humidity = document.createElement('p')
let img = new Image 



const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.current.weather[0].icon + '.png';  // note the concatenation
description.innerHTML = jsObject.current.weather[0].description ;  // note how we reference the weather array
temperature.innerHTML = jsObject.current.temp + '  &ordm;C'  // note how we reference the weather array
humidity.textContent = ` Humedad: ${jsObject.current.humidity}` // note how we reference the weather array
img.src= imagesrc
img.setAttribute('alt' , jsObject.current.weather[0].description)
document.querySelector('.Temperature').append(img, temperature,description, humidity)






// FORECAST

function forecast(){
  let forecast= document.querySelector('.Forecast')
     let forecastBoxes =[]
  jsObject.daily.forEach(
    (day) =>  {        
      let forecastBox = document.createElement('div')
      let h3 = document.createElement('h3')
      let temperature = document.createElement('p')
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      let time = new Date(day.dt*1000)
      time = time.toLocaleDateString('es-ES',options).substring(0,3).toUpperCase() +'.'
      h3.innerHTML = time 
      temperature.innerHTML = day.temp.day + ' &ordm;C' 
      forecastBox.append(h3,temperature)
      forecastBoxes.push(forecastBox)
    })

  forecast.append(forecastBoxes[1],forecastBoxes[2],forecastBoxes[3])  
}

forecast()

  });
 