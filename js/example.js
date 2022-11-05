var a = 10;
let a2 = 100;

// console.log('b from outside function = ',b);
// console.log('b2 from outside function = ',b2); 

console.log(a);


function exam() {
	var b = 20;
	let b2 = 200;
	 a = 11;


	console.log('b = ',b);
	console.log(a);
	console.log(a2);
	console.log(b2);

	{
		let b2 = 'hello';
		console.log(b);
		console.log(b2);
	}
	console.log(b2);


}

exam();

// console.log(b);

// console.log('b from outside function = ',b);
// console.log('b2 from outside function = ',b2); 
console.log(a);