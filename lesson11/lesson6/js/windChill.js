let speed = parseInt(document.getElementById("speed").innerHTML)
let high = parseInt(document.getElementById("high").innerHTML)
let windChill = document.getElementById("windChill")
console.log(speed)
const wd = ( speed, high ) =>{
    let s = speed
    let t = high
    return (35.74 + 0.6215 *t - 35.75 * ( s ** 0.16) + 0.4275 * t* (s** 0.16))
}
let output = wd(speed,high).toFixed(1) 
console.log(output)

windChill.textContent = output