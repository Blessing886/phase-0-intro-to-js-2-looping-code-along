function writeCards(namesArray, eventName) {
    let thankYouMessages = [];
    for (let i = 0; i < namesArray.length; i++) {
        let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
        thankYouMessages.push(message);
    }
    return thankYouMessages;
}
let namesArray = ["Tina", "Rose", "Dan"];
let eventName = "wedding";
console.log(writeCards(namesArray,eventName))

function countDown(number) {
    while (number >= 0) {
        console.log(number)
        number--;
    }
}