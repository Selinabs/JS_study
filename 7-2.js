var person = {
    name: '张三',
    age: 26,
    job: 'teacher',
    eat: function () { }
}

console.log(person.name)

var key = "age"

console.log(person[key])

console.log(person["job"])

for (var i in person) {
    console.log(person[i])
}