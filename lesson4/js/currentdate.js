/**let date = new Date();
let mes =[ "january" ,
"February" ,
"March",
"April", 
"May", 
"June", 
"July", 
"August", 
"September", 
"October", 
"November",  
"December"]
let semana=[ "Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
]
let month, dayOfWeekend;
month=mes[date.getMonth()]
dayOfWeekend=semana[date.getDay()]

let currentDate=  `${dayOfWeekend}, ${date.getDate()} ${month} ${date.getFullYear()}.`;

console.log(currentDate);

document.getElementById("currentDate").textContent= currentDate;
**/

const todaysdate = new Date();

const options = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
document.getElementById('currentDate').textContent = todaysdate.toLocaleDateString('en-GB', options);



