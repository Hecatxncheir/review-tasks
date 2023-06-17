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

const user2 = {
	name: 'Jim',
	funcFunc: user.funcFunc(),
	funcArrow: user.funcArrow(),
	arrowFunc: user.arrowFunc(),
	arrowArrow: user.arrowArrow()
}

user2.funcFunc();
user2.funcArrow();
user2.arrowFunc();
user2.arrowArrow();



// Jim Bob Jim undefined