const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js')

const location = process.argv[2];
if (!location) {
    console.log('Please provide address');
} else {
    geocode(location, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            console.log(error);
        }

        forecast(latitude, longitude, (error, forecasrdata) => {
            if (error) {
                console.log(error);
            }
            console.log('Location: ', location);
            console.log('Forecast: ', forecasrdata);
        })
    });
}