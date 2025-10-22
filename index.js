console.log("Hello, world!") // Prints message to console.

console.log("==========================")
console.log("== Variables")
console.log("==========================")

// Variables are "loose" in JS, the value can change the "type".
let l = 1
const pi = 3.14
var n = 16
console.log("type of (n):", typeof(n))
n = "String"
console.log("type of (n):", typeof(n))
n = true
console.log("type of (n):", typeof(n))

var x = 9 / 5
console.log("9 / 5:", x) // Put Math.round() with x in between (x) to round the decimal.


console.log("==========================")
console.log("== Comparisons")
console.log("==========================")

console.log("2 == 2:", 2 == 2)
console.log("2 == 3:", 2 == 3)
console.log("2 == '2':", 2 == '2')
console.log("2 == '3':", 2 == '3')
console.log("2 === '2':", 2 === '2') // Triple '=' prevents turning one var type into a diffetent when comparing.
console.log("2 !== '2':", 2 !== '2') // Acts the same as a triple '='

if (3 - 1) {
    console.log("== 2 is truthy!")
}

// If value is = 0 (or falsy), it won't print.
if (3 - 3) {
    console.log("== 0 is falsy!")
}

var a = null // null is falsy
if (a) {
    console.log("null is falsy!")
}

var b = undefined
if (b) {
    console.log("undefined is falsy!")
}

if ("") {
    console.log("Empty string is falsy")
}

// All Non-zero numbers and non-empty strings are truthy.


console.log("==========================")
console.log("== Strings")
console.log("==========================")

var str = "this 'is' a \"string\""
var str2 = 'this "is" another \'string\''
var str3 = str + str2
console.log("str3:", str3)
console.log("str3.length:", str3.length)
console.log("str3[]:", str3[0]) // Prints out the '0th' value of the string
str3[0] = 'x'
console.log("str3[]:", str3[0])
console.log("2 + '3':", 2 + '3')

var decathlon = "decathlon"
console.log("decathlon.indexOf('cat'):", decathlon.indexOf('cat'))

var team = "team"
console.log("decathlon.indexOf('i'):", decathlon.indexOf('i'))

/*Use the following website for more on strings:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String */

console.log("==========================")
console.log("== Arrays")
console.log("==========================")

var array = [true, '2', 3, [4, 5, 6]]
array.push("new thing") //Puts something new in array at the end
array.unshift(0) //Puts something at the beggining of array
console.log("array:", array)

// Prints out each item in array until all items are printed once.
for (var i = 0; i < array.length; i++) {
    console.log(" array[" + i + "]", array [i])
}

console.log("==========================")
console.log("== Functions")
console.log("==========================")

function add(a, b, c) {
    console.log("aguments:", arguments)
    if (c) {
        return a + b + c
    } else {
        return a + b
    }
}

console.log("add(1, 2, 3):", add(1, 2, 3))
console.log("add('1', '2', '3'):", add('1', '2', '3'))
console.log("add('1', '2'):", add('1', '2'))
console.log("add(1, 2, 3, 4, 5, 6):", add(1, 2, 3, 4, 5, 6))

var foo = add
console.log("typeof(foo):", typeof(foo))
console.log("foo(1, 2, 3):", foo(1, 2, 3))

var anon = function (a, b, c) {
    return a - b - c
}
console.log("anon(1, 2, 3):", anon(1, 2, 3))

var anon2 = (a, b, c) => {
    return a * b * c
}

console.log("anon2(1, 2, 3):", anon2(1, 2, 3))

function undef() {
    console.log("called undef()")
}

console.log("undef():", undef())

array.forEach(function (elem) {
    console.log(" elem:", elem)
})

function printElem(elem) {
    console.log(" elem:", elem)
}
array.forEach(printElem)

var funcs = [printElem, foo, anon, add]
console.log("funcs:", funcs)