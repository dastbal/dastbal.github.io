
let cityIdaho = document.querySelector('.city').innerHTML

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (res) {
    return res.json();
  })
  .then(data => {
    // temporary checking for valid response and data parsing
    data.towns.forEach( town => {
        if (town.name == cityIdaho ) {

            let events = document.createElement('div');
            let h =document.createElement('h2');
            let p =document.createElement('p');
            let p1 =document.createElement('p');
            let p2 =document.createElement('p');
            let p3 =document.createElement('p');
            h.textContent = 'Uncoming Events :'
            p.textContent=  town.events[0]; 
            p1.textContent=  town.events[1]; 
            p2.textContent=  town.events[2]; 
            p3.textContent=  town.events[3]; 
+            
            events.append(h,p,p1, p2, p3)            
            document.querySelector('.event').append(events);
        }
      
      
    });
    

});
