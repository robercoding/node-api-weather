const axios = require('axios').default;
const colors = require('colors');


//Api key from https://openweathermap.org/
const apiKey = 'your-api-key';

const getLocationInfo = async(city, unit = 'Cel') => {
    let encodedCity = convertToEncodedUrl(city);
    if (unit === 'Far') unit = 'imperial';
    else unit = 'metric';

    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=${apiKey}&units=${unit}`)
}

const convertToEncodedUrl = (city) => {
    return encodeURI(city);
}

const getWeather = function(name, weather, temp) {
    return ` City: ${name}\n`.blue + `\n Weather:` +
        colors.green(`

    Main:${weather.main}
    Description:${weather.description}
    Temp:${temp}
    `);

}

const getCoordinates = function(coordinates) {
    return ` Coordinates\n` +
        colors.green(`
    Longitud: ${coordinates.lon} 
    Latitud: ${coordinates.lat}
`);
}

const getWindSpeed = function(speed) {
    return ` Wind\n` +
        colors.green(`
    Speed: ${speed}
          `);
}

const getAll = function(resp) {
    return `City: ${resp.name}\n`.blue + `\n Weather:` +
        colors.green(`\n
    Main:${resp.weather.main}
    Description:${resp.weather.description}
    Temp:${resp.temp}
    \n`) +
        ` Coordinates\n` +
        colors.green(`
    Longitud: ${resp.coord.lon} 
    Latitud: ${resp.coord.lat}
    \n`) +
        ` Wind\n` +
        colors.green(`
    Speed: ${resp.wind.speed}
  `);
}

module.exports = {
    getLocationInfo,
    getWeather,
    getCoordinates,
    getWindSpeed,
    getAll
}