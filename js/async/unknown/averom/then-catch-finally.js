function test() {
	return new Promise((res) => {
		console.log('5');
		setTimeout(() => res(6), 1000);
	})
}

console.log('1')

test()
    .then(v => {throw new Error(v);})
    .then(v => {throw new Error(v * 2)})
    .finally(() => console.log('2'))
    .catch((v) => console.log(v));

Promise.resolve('3')
    .finally(() => {throw new Error('4')})
    .then((v) => console.log(v))
    .catch((v) => console.log(v));

console.log('2');



// 1 5 2 error4 2 error6