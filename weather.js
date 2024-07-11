const apiKey="227bf3e5f7eda40337c6476b8030533c";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchBtn=document.querySelector(".searchbtn");
async function checkweather(City){
    const response= await fetch(apiUrl+City+`&appid=${apiKey}`);
    data= await response.json();

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    
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


