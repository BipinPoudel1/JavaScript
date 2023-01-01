/* For example, if a farmer wants to print the cattle she has along with the label, we can do as the below code  */
// function printInventory(cows, chicken){
// 	let cowStr=String(cows);
// 	while(cowStr.length<3){
// 		cowStr="0"+cowStr;
// 	}
// 	console.log("No. of cows= "+`${cowStr}`);

// 	let chickenStr=String(chicken);
// 	while(chickenStr.length<3){
// 		chickenStr="0"+chickenStr;
// 	}
// 	console.log("No. of chicken= "+`${chickenStr}`);
// }

// printInventory(7, 11);


/* But if the no. of cattle increases, just copying the similar code for each cattle may not be the better way. So, we can improve our code as: */

// function printCattle(number, label){
// 	let numStr=String(number);
// 	while(numStr.length<3){
// 		numStr="0"+numStr;
// 	}
// 	console.log(`${numStr} ${label}`);
// }

// function printCattlesInventory(cows, chicken, pigs){
// 	printCattle(cows, "Cows");
// 	printCattle(chicken, "Chicken");
// 	printCattle(pigs, "Pigs");
// }
// printCattlesInventory(7, 11, 3);

//The above code works perfectly but the further better part to do this is 

function printCattles(number, width){
	let strNum=String(number);
	while(strNum.length<width){
		strNum="0"+strNum;
	}
	return strNum;
}

function cattlesPresent(cows, chicken, pigs){
	console.log(`${printCattles(cows, 3)} Cows`);
	console.log(`${printCattles(chicken, 3)} Chicken`);
	console.log(`${printCattles(pigs, 3)} Pigs`);
}

cattlesPresent(7, 16, 3);