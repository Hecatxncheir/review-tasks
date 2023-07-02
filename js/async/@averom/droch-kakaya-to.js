setTimeout(() => console.log(3), 2000);
console.log(4);

new Promise((res, rej) => {
	setTimeout(() => res());
})
    .then(() => console.log(1))
    .catch(() => console.log(2));

queueMicrotask(() => {
	console.log(5);
	queueMicrotask(() => {
		requestAnimationFrame(() => {
			console.log(8);
		});
		queueMicrotask(() => {
			console.log(7);
		});
	});
});

requestAnimationFrame(() => {
	console.log(3);
	requestAnimationFrame(() => {
		console.log(6);
	});
});

console.log(9);



// 4 9 5 7 3 8 1 6 3