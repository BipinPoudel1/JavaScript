/*for-in is used to iterate over the enumerable properties of an Object. It allows us to access the keys of the Object, rather than the values. */

/* It's important to note that for-in will also iterate over any inherited properties of an object. If you only wnat to iterate over the object's own properties, you can use Object.keys() or Object.entries() in combination with a for-of loop. */

/* Used for
        - array
        - object to enumerate the object's properties or keys
*/

let person= {
        firstName: "Aruna",
        lastName: "Poudel",
        age: 30,
        gender: "Female",
        occupation: "Businesswoman",
}

let numbers=[1, 2, 3, 4, 5];

// for (i in person){
//         console.log(i);
// }

// for (i in person){
//         console.log(i + person[i]);
// }

for (let i in numbers){
        console.log(i);
}