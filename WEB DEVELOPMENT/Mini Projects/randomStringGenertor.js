let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456987";

let randomString = "";

while (randomString.length < 6) {
    let i = alphabet[Math.floor(Math.random() * alphabet.length)];
    randomString = randomString + i;
}
console.log(randomString);
