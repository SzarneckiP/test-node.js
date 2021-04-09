const fs = require('fs');

const genders = ['male', 'female'];
const maleName = ['Remigiusz', 'Tadeusz', 'John', 'Robert', 'Sebastian', 'Maciek'];
const femaleName = ['Ewa', 'Martyna', 'Ola', 'Patrycja', 'Halina'];
const lastName = ['Karpiuk', 'Rożyński', 'Puchalski', 'Karwowski', 'Gbur', 'Downar'];

const randChoice = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
};
const people = [];

for (let x = 0; x < 20; x++) {
    let element = {};

    element.gender = randChoice(genders);

    if (element.gender === 'male') {
        element.firstName = randChoice(maleName);
    } else {
        element.firstName = randChoice(femaleName);
    }

    element.lastName = lastName[Math.floor(Math.random() * lastName.length)];

    element.age = Math.floor(Math.random() * (78 - 18) + 18);


    people.push(element);
}

fs.writeFile('people.json', JSON.stringify(people), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});