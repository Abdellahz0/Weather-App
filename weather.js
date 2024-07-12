const apiKey="227bf3e5f7eda40337c6476b8030533c";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchBtn=document.querySelector(".searchbtn");
const weatherIcon=document.querySelector(".weather-icon");


async function checkweather(City){
    const response= await fetch(apiUrl+City+`&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        document.querySelector(".error").style.display="none";
        document.querySelector(".weather").style.display="block";
        data= await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";


    switch(data.weather[0].main){
        case "Clouds":
        weatherIcon.src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-22-128.png";
        break;
        case"Clear":
        weatherIcon.src="https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/weather-clear-128.png";
        break;
        case "Rain":
        weatherIcon.src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_16-128.png";
        break;
        case "Drizzle":
        weatherIcon.src="https://cdn3.iconfinder.com/data/icons/spring-23/32/rain-rainfall-drizzle-sun-cloud-weather-forecast-128.png";
        break;
        case "Mist":
        weatherIcon.src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_39-128.png";
        break;
    }
    }
    
}    

document.addEventListener("DOMContentLoaded", () => {
    searchBtn.addEventListener("click", () => {
        checkweather(searchbox.value);
        searchbox.value="";
    });

    // Listen for keydown event on the searchbox, not searchBtn
    searchbox.addEventListener("keydown", event=> {
        if (event.key === "Enter") {
            //event.preventDefault();
            checkweather(searchbox.value);
            searchbox.value="";
        }
    });
});


