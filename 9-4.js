var str = 'nick,jack,张三,李四'

// var list = new Array()
var list = str.split(",")
console.log(list)

list.splice(1,1)
console.log(list)
console.log(typeof(list))
var list1 = [23, 32,45, 53, 62, 68]

function add(num) {
    list1.push(num)
    for (var i =0;i<list1.length;i++) {
        var minindex=i
        for (var j = i;j<list1.length;j++){
            if (list1[j]<list1[minindex]){
            minindex = j;
            }
            var temp = list1[minindex]
            list1[minindex] = list1[i]
            list1[i] = temp
        }    
    }
}

add(80)
console.log(list1)