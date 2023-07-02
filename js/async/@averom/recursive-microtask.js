setTimeout(() => console.log(1));

function run() {
	return Promise.resolve(10).then(() => run());
}

run();
console.log(2);



// 2