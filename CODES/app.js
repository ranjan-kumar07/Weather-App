
let apiKey = "5b9850a80f30669da462aa2498606296";


let input = document.querySelector('input');
let search = document.querySelector('button');
let cityName = document.querySelector('.city');
let temperature = document.querySelector('.temp');
let humidity = document.querySelector('.humidity');
let wind = document.querySelector('.wind');
let cloud = document.querySelector('.weather-icon');





async function getWeather(city){
    try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

       let res = await axios.get(url);
       
       getData(res.data);
    
    
    }
    catch(e){
        console.log("ERROR",e);
        cityName.innerText = "city Not found";
        temperature.innerText = "--"
        humidity.innerText = "--"
        wind.innerText = "--"
       

    }
}

function getData(data){
    cityName.innerText = data.name;
    temperature.innerText = data.main.temp +'°C';
    humidity.innerText = data.main.humidity+'%';
    wind.innerText = data.wind.speed+'m/s';
    let iconCode = data.weather[0].icon;

    cloud.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    // cloud.src = "../images/rain.png";
    
}

search.addEventListener("click", async ()=>{
    console.log("clicked");
    let city = input.value.trim();
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }
    await getWeather(city);
    
});

