function add() {
    var count= 0

    return function inner() {
    
    count += 1
    console.log(count)
    }
    // inner()
}

var test = add()
test()
test()
test()
test()