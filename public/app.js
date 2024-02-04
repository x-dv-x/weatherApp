import dotenv from "dotenv";


const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {
    const APIkey = process.env.API_KEY
    const city = document.querySelector('.search-box input').value

    if (city == "") {
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`
    ).then(response => response.json()).then(json => {

        if (json.cod == '404') {
            container.style.height = "450px"
            weatherBox.classList.remove('active')
            weatherDetails.classList.remove('active')
            error404.classList.add('active')
            return;
        }

        container.style.height = "555px"
        weatherBox.classList.add('active')
        weatherDetails.classList.add('active')
        error404.classList.remove('active')

        const image = document.querySelector('.weather-box img')
        const temp = document.querySelector('.weather-box .temp')
        const description = document.querySelector('.weather-box .description')
        const humidity = document.querySelector('.weather-details .humidity span')
        const wind = document.querySelector('.weather-details .wind span')

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = "/_public/clear-sky.png"
                break;
            
            case 'Rain':
                image.src = "/_public/heavy-rain.png"
                break;

            case 'Snow':
                image.src = "/_public/snowflake.png"
                break;

            case 'Clouds':
                image.src = "/_public/clouds.png"
                break;

            case 'Haze':
                image.src = "/_public/fog.png"
                break;
            
            case 'Mist':
                image.src = "/_public/mist.png"
                break;
            
            default:
                image.src = "/_public/clouds.png"

        }

        temp.innerHTML = `${parseInt(json.main.temp)}<span>°c</sapn>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

    }) 
})

