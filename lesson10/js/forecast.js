
let cityId = 5604473
let apiKey = "e29e92b4b8a58175872ada937b0ffb2d"



const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=imperial&appid=${apiKey}`;
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    let forecast= document.getElementById('forecast')
    let forecastBoxes =[]
    console.log(jsObject);
    for (let i=6 ; i <= 40 ; i = i+8) {
      let forecastBox = document.createElement('div')
      console.log(jsObject.list[i].dt_txt);
      let h3 = document.createElement('h3')
      let img = new Image
      let p = document.createElement('p')

      h3.innerHTML = jsObject.list[i].dt_txt
      img.src = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
      p.innerHTML = jsObject.list[i].main.temp + ' &ordm;F'

      forecastBox.append(h3,img,p)
      forecastBoxes.push(forecastBox)
    }
    forecast.append(...forecastBoxes)
    
  });

  document.getElementsByClassName
