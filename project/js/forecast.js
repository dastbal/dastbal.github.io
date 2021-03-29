function forecast() {
let lat2 = -2.123589
let lon2 = -79.887738
let apikey2 = "e29e92b4b8a58175872ada937b0ffb2d"


const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat2}&lon=${lon2}&units=metric&lang=es&appid=${apikey2}`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject)
    
    
    
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
  });

}

forecast()