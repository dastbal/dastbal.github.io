
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (res) {
    return res.json();
  })
  .then(data => {
    // temporary checking for valid response and data parsing
    const towns = data['towns'];
    towns.forEach(town =>{
      if (town.name == 'Preston'){ town.photo = 'https://ahbrbaepvq.cloudimg.io/v7/dastbal.github.io/lesson11/images/preston.webp?w=261&h=200'}
      if (town.name == 'Soda Springs'){ town.photo = 'https://ahbrbaepvq.cloudimg.io/v7/dastbal.github.io/lesson11/images/sodasprings.webp?w=261&h=200'}
      if (town.name == 'Fish Haven'){ town.photo = 'https://ahbrbaepvq.cloudimg.io/v7/dastbal.github.io/lesson11/images/fishhaven.webp?w=261&h=200'}
    })

    let cards= []

    
    towns.forEach( town => {
        if (town.name == 'Preston' || town.name == 'Fish Haven'  ||  town.name == 'Soda Springs') {

            let card = document.createElement('div');
            let cardContainer = document.createElement('div');

            let h2 = document.createElement('h2');
            let span =document.createElement('span');
            let p =document.createElement('p');
            let p2 =document.createElement('p');
            let p3 =document.createElement('p');
            let img = new Image
            img.setAttribute('src', town.photo );
            //   img.setAttribute('data-src', prophet.imageurl);
            img.setAttribute('alt', town.name + ' City' );
            
            h2.textContent = town.name;
            span.textContent = town.motto;
            p.textContent=  'Year Founded: '+ town.yearFounded; 
            p2.textContent=  'Population: '+ town.currentPopulation; 
            p3.textContent=  'Annual Rain Fall: '+ town.averageRainfall; 

            cardContainer.append(h2, span, p, p2, p3)            
            card.append(cardContainer, img);
            
            cards.push(card)
        }
      
      
    });
    document.querySelector('div.town-data').append(cards[2],cards[1],cards[0]);


});