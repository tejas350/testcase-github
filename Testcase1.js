// testcase1.js

function DoStuff(x, y){
    var result = x + y;
    var unusedVar = 42; // Unused variable
    if(result == 10){
        console.log("Result is ten");
    } else {
        console.log("Result is not ten");
    }
    return result;
}

DoStuff(5, 5);

// Bad practice: global variable
counter = 0;

function increment(){
    counter+=1;
    console.log("Counter: " + counter)
}

increment()
