const request = require('request');

var geocode = (address) => {
    return new Promise((resolve, reject)=>{
        const encodedAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body)=>{

        if(error) {
            reject('unable to connect to google servers');

        } else if (body.status === 'ZERO_RESULTS') {
            reject('unable to find address')
        } else if (body.status === 'OK') {
            resolve({
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            });
        }
    })
    })
}

geocode('400610').then((location)=>{
    console.log(location);
}, (error)=>{
    console.log(error);
})