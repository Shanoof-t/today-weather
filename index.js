
const apiKey="50a31b006778d0ace771d51d312d14eb"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

let city=document.getElementById("city-name")
let btn=document.querySelector(".btn")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data= await response.json();
    console.log(data);
    document.querySelector("#city").innerHTML=data.name;
    document.querySelector("#temprature").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector("#hum").innerHTML=data.main.humidity + "%";
    document.querySelector("#wint").innerHTML=data.wind.speed + " km/h";
}
btn.addEventListener("click",()=>{
    document.getElementById("city-name")
    checkWeather(city.value)
})



