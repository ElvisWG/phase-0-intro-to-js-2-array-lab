// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}
function destructivelyRemoveLastCat() {
cats.pop();
return cats;
}
function appendCat(name) {
    const newCat1 = [...cats,name];
    return newCat1;
    //const cats = cats.slice(0,cats.length-1);
    //return cats;
}
function prependCat(name) {
    const newCat2 = [name, ...cats];
    return newCat2;
}
function removeLastCat() {
    const removeCats1 = cats.slice(0,cats.length-1);
    return removeCats1;
}
function removeFirstCat() {
    const removecats2 = cats.slice(1);
    return removecats2;
}