function printName() {
    let helloName = "Hello John";
    function inner() {
        return helloName;
    }
    return inner;
}

let fun = printName();
console.log(fun());