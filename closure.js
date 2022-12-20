//In JS,every scope has access to other scopes which is called closure. Here, the global variable myName is used inside a function printName which is because of closure.

let myName='Bipin';

function printName(){
	console.log(myName);
}

myName='Poudel';

printName();

myName='Stark';

printName();