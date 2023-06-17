const findTheOldest = function(people) {
    let maxAge = 0;
    let oldestPerson;
    for(let i = 0; i < people.length ; i++){
        let age = 0;
        if(people[i].yearOfDeath != null){
            age = people[i].yearOfDeath - people[i].yearOfBirth;
        }
        else{
            let date = new Date();
            age = date.getFullYear() - people[i].yearOfBirth;
        }
        if(age > maxAge){
            maxAge = age;
            oldestPerson = people[i];
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
