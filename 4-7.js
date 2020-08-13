// var str="Welcome to 小滴课堂,今天星期"+d.getDate()
// 在日志中
var d = new Date()
var arr = new Array(7)
arr[0]='天'
arr[1]='一'
arr[2]='二'
arr[3]='三'
arr[4]='四'
arr[5]='五'
arr[6]='六'
console.log("Welcome to 小滴课堂,今天星期"+arr[d.getDay()])

var x = 0
var sum = 0
var i = 1
for (i;i<=101;i++){
    if (i % 7 === 0){
        x++;
        sum+=i;
    }
}
console.log(x,sum)

var a = 1
var c = 1
for (a;a<=5;a++) {
    for (c;c<=a;c++){
        document.write("*")
    }
    document.write("<br/>")
    c = 1
}