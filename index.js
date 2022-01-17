const message = () => {
    const randomString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let results = '';
    // console.log(randomString.length);
    for (let i = 0; i < 15; i++) {
        results += randomString.charAt(Math.floor(Math.random() * randomString.length))
    }

    return console.log(`Hello user: ${results}, thank you for starting up the program!`);

}

console.log(message());