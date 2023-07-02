'use strict'
const user = {
	test: function() {
		const fun = function() {
			console.log(this);
		};
		fun();
	}
}
user.test() // 



// undefined