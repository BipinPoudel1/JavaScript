let arr= [1, 2, 3, 4, 5, 7]

// console.log(arr);
// console.log(arr.length)
// console.log(typeof(arr))

// arr=arr.toString()
console.log(arr)
console.log(typeof(arr))

console.log(arr.join(" and "))

console.log(arr.pop())
console.log(arr)

//Shift returns the first element of an array and removes it
console.log(arr.shift())
console.log(arr)

//Unshift add an element to the 0 index of an array i.e. first elemnt
arr.unshift(500)
console.log(arr)

//Delete can be used to delete any element of an array but doesn't change the length, it just empties the array
delete(arr[4])
console.log(arr)


//Concat
let a1= [1, 2, 3]
let a2= [6, 5, 7]
let a3= [9, 8, 7]

console.log(a1.concat(a2, a3)); //It doesn't change the original array, just returns for this instance
console.log(a1)


//Sort
console.log(a2.sort())

//Splice- can be used to delete or/and add new items in an array

let numbers= [1, 2, 3, 4, 5]
numbers.splice(1, 2)
console.log(numbers)

//In case of adding,
let n= [1, 2, 3, 4, 5]
n.splice(2, 2, 7, 8)
console.log(n)



//Slice- slices out a piece from an array. It creates a new array
const num= [1, 2, 3, 4, 5]
console.log(num.slice(2))
console.log(num.slice(1, 3)) //Includes the starting index but excludes the ending one
console.log(num.reverse())
