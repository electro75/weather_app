
var asyncAdd = (a,b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof a === 'number' && typeof b ==='number'){
                resolve(a + b);
            } else {
                reject('number daal bro')
            }
        }, 1500)
    })
}

asyncAdd(7, 7).then((sum)=>{
    console.log('hua '+sum);
    return asyncAdd(sum, 33);
}).then(( sum )=>{
    console.log('wapas hua '+sum);
}).catch((error)=>{
    console.log(error);
})

// var somePromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('nice');
//         // reject('na ho paya');
//     }, 2500);
// });

// somePromise.then((message)=>{
//     console.log('success! ' + message)
// }, (error)=>{
//     console.log(error);
// })
// }).catch((error)=>{
//     console.log('nope:( '+ error);
// })