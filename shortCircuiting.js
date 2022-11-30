//Short Circuiting of Logical Operators
// OR operator returns the left value if it can make it true, otherwise will return the right value

console.log(null || "user");	//user
console.log("agnes" || "user");	//agnes

//AND operator works the opposite way

console.log(null && "user");	//null
console.log ("agnes" || "user");	//agnes