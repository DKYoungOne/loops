



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

for (const element of arrayOfPersons) {
    console.log(element.birthDate)
}

const personBirthDates = () => {
    for (const element of arrayOfPersons) {
        if (element.birthDate.slice(-1) % 2 !== 0) {
            console.log(element.birthDate)
        }
    }
}

const mapArr = (arr) => { arr.map(x => console.log(x)); }

const filterMale = (arr) => {
    const result = arr.filter(person => person.gender == 'male');
    return result;
}


const eigthiesFilter = (element) => {
        if (element.birthDate > 1990) {return true;}
}

const ageFilter = () => {
    for (element in arrayOfPersons) {
        if (eigthiesFilter(element)) {
            console.log(element);
        }
    }
}

function testCallback(element) {
    if (element > 10) {
        return true;
    }
}
const array1 = [5, 12, 8, 130, 44];

function find(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        } 
    }
    return undefined;
}

function findIndex(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        return arr.indexOf(arr[i]);
      }
    }
    return -1;
  }