/*for-of is used to iterate over the values in an iterable Object, such as an array or a String. It allows us to access the values of the object FileSystemDirectoryHandle, without having to use an index*/

/* Used for
        - array
        - map
        - set
        - string
*/

// let str= "illness";
// for (i of str){
//         console.log(i);
// }

// const fruits= ["apple", "banana", "orange", "grape"];
// for (fruit of fruits){
//         console.log(fruit);
// }

let person= {
        firstName: "Aruna",
        lastName: "Poudel",
        age: 30,
        gender: "Female",
        occupation: "Businesswoman",
}
person.status= "Married";

for (let a of Object.keys(person)){
        console.log(a);
}