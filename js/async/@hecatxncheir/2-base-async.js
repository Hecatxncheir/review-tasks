setTimeout(() => console.log('start'))

console.log(1)

new Promise((resolve) => {
  console.log('async')
  
  setTimeout(() => {
    console.log('async timeout')
    resolve()
  }, 5)
})
  .then(() => console.log('then1'))
  .then(() => console.log('then2'))

console.log(2)

setTimeout(() => console.log('timeout'), 5)

setTimeout(() => console.log('end'))



// 1, async, 2, start, end, async timeout, then1, then2, timeout