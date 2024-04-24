// "function" aka "executor"
const p = new Promise(function(resolve, reject) {
    // console.log(resolve, reject);
    // let value = 42;
    // resolve(value);
    setTimeout(function() {
        resolve("Timed out!");
        reject("Something went wrong!");
    }, 2000);    
});

// -> [Function (anonymous)] [Function (anonymous)]
// -> Promise {<pending>}

p.then(function(result) {
    console.log(result);
}).catch(function(err) {
    console.log(err);
});

// -> Something went wrong!

