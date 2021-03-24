const fruits = () => {
	if(true) {
		var fruits = "apple";
		let fruits2 = "orange";
		const fruits3 = "kiwi";
		console.log(fruits2)
		console.log(fruits3)
	}
	console.log(fruits)
}

fruits()



var x = 1;
{
	var x = 2;
	console.log(x)
}
console.log(x)


const anotherFunction = () => {
	for(let i = 0; i < 3; i++) {
		setTimeout(() => {
			console.log(i);
		}, 1000);
	}
}

anotherFunction()