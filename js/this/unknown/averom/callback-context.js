// 'use strict'

var length = 4;
function cb() {
	console.log(this.length);
}

const object = {
	length: 5,
	method(cb) {
		cb();
	}
}

object.method(cb);



// 4