
// let cityId = 5604473
// let apiKey = "e29e92b4b8a58175872ada937b0ffb2d"



// const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=imperial&appid=${apiKey}`;
// fetch(apiURL)
// .then((response) => response.json())
// .then((jsObject) => {
//     let forecast= document.getElementById('forecast')
//     let forecastBoxes =[]
//     console.log(jsObject);
//     for (let i=6 ; i <= 40; i = i = i+8) {
//       console.log(jsObject.list[i].dt_txt);
//       let forecastBox = document.createElement('div')
//       let h3 = document.createElement('h3')
//       let img = new Image
//       let p = document.createElement('p')

//       h3.innerHTML = jsObject.list[i].dt_txt
//       img.src = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
//       p.innerHTML = jsObject.list[i].main.temp + ' &ordm;F'

//       forecastBox.append(h3,img,p)
//       forecastBoxes.push(forecastBox)
//     }
//     forecast.append(...forecastBoxes)
    
//   });

let city = document.querySelector('.city').innerHTML
let soda = 5607916
let fish = 5585010
let preston = 5604473    
let id = 0    
let apiKey = "e29e92b4b8a58175872ada937b0ffb2d"
if (city=='Preston'){
  id=preston
} 
if (city=='Fish Haven'){
  id=fish
} 
if (city=='Soda Springs'){
  id=soda
} 





const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=imperial&appid=${apiKey}`;
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    let forecast= document.getElementById('forecast')
    let forecastBoxes =[]
    jsObject.list.forEach(
      i => { if (i.dt_txt.includes('18:00:00')){
        // console.log(i)
        let forecastBox = document.createElement('div')
        let h3 = document.createElement('h3')
        let img = new Image
        let p = document.createElement('p')

        let time = new Date(i.dt_txt)
        time = time.toUTCString().substring(0,3)
        // console.log(time)

        h3.innerHTML = time
        img.src = 'https://openweathermap.org/img/w/' + i.weather[0].icon + '.png';
        img.setAttribute('alt' , i.weather[0].description )
        p.innerHTML = i.main.temp + ' &ordm;F'

        forecastBox.append(h3,img,p)
        forecastBoxes.push(forecastBox)


      }
    }
    )
    forecast.append(...forecastBoxes)  
  });

