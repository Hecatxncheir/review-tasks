function foo(num) {
	console.log('foo', num);
	this.count++;
}

foo.count = 0;
var i;
for (i = 0; i < 10; i++) {
	if (i > 5) foo(i);
}

console.log(foo.count);



// foo 6
// foo 7
// foo 8
// foo 9
// 0