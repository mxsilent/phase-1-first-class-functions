function receivesAFunction (callback) {
    callback();
}

 function returnsANamedFunction () {
    return function name () {
        console.log("This is a named function")
    } 
 }

 function returnsAnAnonymousFunction () {
    return function () {
        console.log("This function is Anonymous");
    }
 }