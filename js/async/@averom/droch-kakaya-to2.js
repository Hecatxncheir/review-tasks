try {
	new Promise((res) => {
		a++
		console.log(a);
		res(a);
	})
	.then(i => {
		console.log(i);
		a++;
		console.log(a);
		return a + i;
	})
	.catch((error) => {
		console.log(error)
		a++;
		return a;
	})
	.then((value) => console.log(value))
	.catch((error) => console.log(error));

	let a = 1;
} catch (e) {
	console.log(e);
}



// error 2