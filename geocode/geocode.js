const request = require('request');

var makeRequest = (address, callBack) => {
    const encodedAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body)=>{

        if(error) {
            callBack('unable to connect to google servers');

        } else if (body.status === 'ZERO_RESULTS') {
            callBack('unable to find address')
        } else if (body.status === 'OK') {
            callBack(undefined, {
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            });
        }
    })
}

module.exports = {
    makeRequest
}