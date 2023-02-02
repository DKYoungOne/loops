



let i = 0;
do {
    i++;
    console.log(i);
} while (i <= 1000)

const person1 = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1995",
    gender: "female"
}

const person2 = {
    firstName: "Jim",
    lastName: "Doe",
    birthDate: "Jan 1, 1997",
    gender: "male"
}

const person3 = {
    firstName: "Kelly",
    lastName: "Doe",
    birthDate: "September 17, 1990",
    gender: "female"
}

const logKeys = (obj) => {
    console.log(Object.keys(obj));
}

const logEntries = (obj) => {
    console.log(Object.entries(obj));
}
const arrayOfPersons = [person1, person2, person3];