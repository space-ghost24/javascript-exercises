const findTheOldest = function(people) {
    let oldestPerson;
    let maxAge = 0;

    for(let person of people){
        const deathYear = person.yearOfDeath || new Date().getFullYear();
        const age = deathYear - person.yearOfBirth;
        if (age > maxAge){
            maxAge = age;
            oldestPerson = person;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
