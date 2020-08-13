var a = prompt("输入第一个数字")
var b = prompt("输入第二个数字")
var c = prompt("输入第三个数字")
var d = prompt("输入第四个数字")
var e = prompt("输入第五个数字")
var f = prompt("输入第六个数字")
var g = prompt("输入第七个数字")
function about_max(num1, num2, num3, num4, num5, num6, num7) {
    var y = new Array
    y[0] = num1
    y[1] = num2
    y[2] = num3
    y[3] = num4
    y[4] = num5
    y[5] = num6
    y[6] = num7
    document.write(y)
    document.write("<br/>")
    for (var i = 0; i < y.length; i++) {
        var minIndex = i
        for (var j = i; j < (y.length); j++) {
            if (y[j] < y[minIndex]) {
                minIndex = j;
            }
            var h
            h = y[minIndex]
            y[minIndex] = y[i]
            y[i] = h
        }
    }
    document.write(y)
}
about_max(a, b, c, d, e, f, g)