var count = 10
var fnArr = []

while(count--) {
    fnArr.push(function() {
        console.log(count + count)
    })
}

fnArr[0]()
fnArr[1]()
fnArr[2]()