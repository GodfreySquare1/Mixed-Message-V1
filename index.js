const userNameGenerator = () => {
    const randomString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomUserName = '';
    // console.log(randomString.length);
    for (let i = 0; i < 15; i++) {
        randomUserName += randomString.charAt(Math.floor(Math.random() * randomString.length))
    }

    return randomUserName;

}

const randWelcomeMessage = () => {
    const strArray = [['You did it!'], ['Welcome to the team'], 'No No No!!!']
    let results1 = [];
    for (let i = 0; i < strArray.length; i++) {
        results1 = strArray.Math.random();
        console.log(results1);
    };
    return results1;

};

let checkUserData = (userName, text) => {
    return {
        username: userName,
        userMessage: text,
    }
};


console.log(message(randWelcomeMessage()));