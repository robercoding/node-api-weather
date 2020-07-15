const weather = require('./weather/weather')
const argv = require('./yargs/yargs').argv
const colors = require('colors')

let city = argv.location;
let unit = argv.unit
let coordinates = argv.coord
let all = argv.all
let wind = argv.wind

let locationInfo = weather.getLocationInfo(city, unit).then(resp => {
    if (resp.data.cod == 200) {
        return weatherData = {
            name: resp.data.name,
            weather: resp.data.weather[0],
            temp: resp.data.main.temp,
            coord: resp.data.coord,
            wind: resp.data.wind
        };
    }
}).catch(err => {
    console.log("We couldn't find information for your city");
    return [];
})

locationInfo.then(resp => {

    if (resp.length === 0) {
        return;
    } else {
        if (all) {
            console.log(weather.getAll(resp));
        } else {
            console.log(weather.getWeather(resp.name, resp.weather, resp.temp));

            if (coordinates) {
                console.log(weather.getCoordinates(resp.coord));
            }

            if (wind) {
                console.log(weather.getWindSpeed(resp.wind.speed));
            }
        }
    }

}).catch(err => {
    console.log(err);
})