'use strict'
const user = {
	name: 'Bob',
	funcFunc() {
		return function () {
			console.log(this);
		}
	},
	funcArrow() {
		return () => {
			console.log(this);
		}
	},
	arrowFunc: () => {
		return function () {
			console.log(this);
		}
	},
	arrowArrow: () => {
		return () => {
			console.log(this);
		}
	},
};

user.funcFunc()(); //
user.funcArrow()(); //
user.arrowFunc()(); //
user.arrowArrow()(); //



// undefined, user, undefined, undefined