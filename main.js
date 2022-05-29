//get variables from html elements
const advice = document.getElementById("advice");
const heading = document.getElementById("heading--el")
console.log(heading)

//run a setInterval function that fetches data every 5secs
window.setInterval(function() {
    //fetch data from advicesslip
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
        //inject data into html elements
        advice.textContent = `"${data.slip.advice}"`
        heading.textContent = `Advice #${data.slip.id}`
    })
}, 10000)
