const request = require('request');


var getWeather = (location, callback)=> {
    request({
        url: `https://api.darksky.net/forecast/27b76ba212092bbceb63f5d7edecc0ff/${location.lat},${location.lng}`,
        json: true
    }, (error, response, body) =>{
    
        if(!error && response.statusCode === 200) {
            callback(undefined, body.currently.temperature);
            // console.log(body.currently.temperature);
        } else {
            callback('unable to fetch weather');
            // console.log('Unable to fetch weather');
        }
    })
}

module.exports = {
    getWeather
}