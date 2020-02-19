//Programming the BOM and DOM

//Window
year = 2019;
console.log(window.year);

//Timers
let timeoutId = setTimeout(function () {
    console.log('1 second passed')
}, 1000);

//if we need to cancel
clearTimeout(timeoutId);

let intervalId = setInterval(function () {
    console.log('1 second passed')
}, 1000);

//if we need to cancel
clearInterval(intervalId);

//The Location Object
console.log(location.href);