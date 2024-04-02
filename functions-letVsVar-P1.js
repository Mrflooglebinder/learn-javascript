// Functions: Let vs Var

//var => function-scoped
// ES6 (ES2015): let, const => block-scoped


function start() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    // console.log(i);  // if uncommented, this will throw an error - ReferenceError: i is not defined
}


function stop() {
    // The var variable is function-scoped, not block-scoped.
    // This means that it is available anywhere within the function.
    for (var i = 0; i < 5; i++) {
        if (true) {
            // The var variable: fuction-scoped
            var color = 'red';
        }
        console.log(i);
    }
    // able to access the var variable color here because it is function-scoped
    console.log(color);
}


start();
console.log('------------------------');
stop();