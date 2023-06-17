var animal = { jumps: null };
var rabbit = { jumps: true };

rabbit.__proto__ = animal;

console.log( rabbit.jumps ); //

delete rabbit.jumps;
console.log( rabbit.jumps ); //

delete animal.jumps;
console.log( rabbit.jumps); //

// true null undefined
