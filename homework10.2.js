let str = "Wonderful Joyful Happiness Time Task Apple";
let regex = /\b[^Aa\s]{6,}\b/g;

const matches = str.match(regex);
console.log(matches)