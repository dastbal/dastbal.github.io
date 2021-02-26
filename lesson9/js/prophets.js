// const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

// fetch(requestURL)
//   .then(function (res) {
//     return res.json();
//   })
//   .then(data => {
//     console.table(data) 
//     // temporary checking for valid response and data parsing
//     const prophets = data['prophets'];

//     let cards= []
    
//     prophets.forEach(prophet => {
//       let card = document.createElement('section');
//       let h2 = document.createElement('h2');
//       let p =document.createElement('p');
//       let p2 =document.createElement('p');
//       let img = new Image
//       img.setAttribute('src', prophet.imageurl);
//       img.setAttribute('alt', prophet.name + " " + prophet.lastname + " -" + prophet.order );
      
//       h2.textContent = prophet.name + ' ' + prophet.lastname;
//       p.textContent=  'Date of Birth: '+ prophet.birthdate; 
//       p2.textContent=  'Place of Birth: '+ prophet.birthplace; 
      
//       card.append(h2,p,p2, img);
//       cards.push(card)
      
//     });
//     document.querySelector('div.cards').append(...cards);


// });

import {resgisterImg} from './lazy.js'


const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (res) {
    return res.json();
  })
  .then(data => {
    console.table(data) 
    // temporary checking for valid response and data parsing
    const prophets = data['prophets'];

    let cards= []
    let images=[]
    
    prophets.forEach(prophet => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p =document.createElement('p');
      let p2 =document.createElement('p');
      let img = new Image
      img.setAttribute('src', "./placeholder.jpg");
      img.setAttribute('data-src', prophet.imageurl);
      img.setAttribute('alt', prophet.name + " " + prophet.lastname + " -" + prophet.order );
      
      h2.textContent = prophet.name + ' ' + prophet.lastname;
      p.textContent=  'Date of Birth: '+ prophet.birthdate; 
      p2.textContent=  'Place of Birth: '+ prophet.birthplace; 
      
      card.append(h2,p,p2, img);
      cards.push(card)
      images.push(img)
      
    });
    document.querySelector('div.cards').append(...cards);

    resgisterImg(images)


});
