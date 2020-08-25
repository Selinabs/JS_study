;(function (){
    var Computer=function(opt) {}
    Computer.prototype={
        plus: function(num1,num2){
            return num1+num2
        }
    }
    window.Computer = Computer
})()

var com = new Computer()
var sum = com.plus(2,3)
console.log(sum)