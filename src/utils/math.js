export function generateRandomNumber(start, end) {
    return Math.round((Math.random() * (end - start)) + start);
}