const isLogged = true;

const promise1 = new Promise((resolve, reject) => {
    if (isLogged) {
        setTimeout(() => {
            resolve(Math.random());
        }, 1000);
    } else {
        reject("User is not logged in");
    }
});

const promise2 = (number) => {
    return new Promise((resolve, reject) => {
        if (number > 0.5) {
            setTimeout(() => {
                resolve({ name: "Marco", age: 24 });
            }, 1000);
        } else {
            reject("Number is less or equal to 0.5");
        }
    });
}

promise1.then((result) => {
    console.log(result);
    return promise2(result);
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
})