console.log('apple');

setTimeout(() => console.log('pear'), 0);

Promise.resolve('melon').then(res => console.log(res));

new Promise((res) => {
    console.log('orange');
    res('pineapple');
}).then(res => console.log(res));

console.log('lime');

//==========================================================

// apple, orange, lime, melon, pineapple, pear