function Person(obj){
    this.name = obj.name
    this.age = obj.age
    this.hight = obj.hight
}

var person = new Person({
    name:"小明",
    age: 18,
    hight:185
})

console.log(person)

var person1 = new Person({
    name:"小红",
    age: 15,
    hight:153
})
Person.prototype.country = "China"

console.log(person1,person1.country)