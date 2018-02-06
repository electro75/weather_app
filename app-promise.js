const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
            .options({
                a:{
                    demand: true,
                    alias: 'address',
                    describe: 'Address to fetch weather for',
                    string: true
                }
            })
            .help()
            .alias('help', 'h')
            .argv;

const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response)=>{
    if(response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find address');
    }
    var location = response.data.results[0].geometry.location;
    const weatherUrl = `https://api.darksky.net/forecast/27b76ba212092bbceb63f5d7edecc0ff/${location.lat},${location.lng}`
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response)=>{
    var temperature = response.data.currently.temperature;
    console.log(`Temperature: ${temperature}`);
})
.catch((e)=>{
    if(e.code === 'ENOTFOUND') {
        console.log('Unable to connect to server')
    } else {
        console.log(e.message);
    }
    
})