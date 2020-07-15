const argv = require('yargs').options({
        location: {
            alias: 'l',
            desc: 'Returns the temperature of the city',
            demand: true
        },
        wind: {
            alias: 'w',
            desc: 'Returns the speed wind'
        },
        coord: {
            alias: 'c',
            desc: 'Returns coordinates of the city'
        },
        unit: {
            alias: 'u',
            desc: 'Type of unit',
            default: 'Cel'
        },
        all: {
            alias: 'all',
            desc: 'Returns all the info that you can get from parameters'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}