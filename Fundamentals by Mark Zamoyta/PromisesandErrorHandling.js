//Promises and Error Handling

//Try, Catch, finally, and throw
try {
    // let car = 123;
    throw new Error('my defined error')
}
catch (error) {
    console.log("Error", error)
}
finally {
    console.log('yo, its working now!')
}

//Promise
let promise = new Promise(
    function (resolve, reject) {
        setTimeout(resolve, 100, 'someValue');
    }
);
promise.then(
    value => console.log('fulfilled: ' + value),
    error => console.log('rejected: ' + error)
);
