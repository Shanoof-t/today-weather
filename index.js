
const apiKey="50a31b006778d0ace771d51d312d14eb"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

let city=document.getElementById("city-name")
let btn=document.querySelector(".btn")
let weatherIcon=document.querySelector("#cloud")
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".invalid").style.display="block"
        document.querySelector(".weather-main").style.display="none"
    }else{
        document.querySelector(".invalid").style.display="none"
        document.querySelector(".weather-main").style.display="block"
    }
    var data= await response.json();
    console.log(data);
    document.querySelector("#city").innerHTML=data.name;
    document.querySelector("#temprature").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector("#hum").innerHTML=data.main.humidity + "%";
    document.querySelector("#wint").innerHTML=data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.className="bi-clouds"
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.className="bi-brightness-high-fill"
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.className=" bi-cloud-rain-fill"
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.className="bi-cloud-drizzle-fill"
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.className="bi-cloud-fog-fill"
    }
    document.querySelector(".weather-main").style.display="block"
}
btn.addEventListener("click",()=>{
    document.getElementById("city-name")
    checkWeather(city.value)
})



