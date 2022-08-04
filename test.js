// Practice Problem 01
/* Write a function called foo() which prints “foo” and a function called bar() which prints “bar”. Call function bar() in the foo() function after printing. What will be the output? Now call the foo() to see the output. */

function foo() {
    console.log('foo');
    bar();
}
function bar() {
    console.log('bar');
}

foo();

// Practice Problem 02
/*Write a function called make_avg() which will take an three integers and return the
average of those values.*/

function make_avg(mark1, mark2, mark3) {
    const totalMark = mark1 + mark2 + mark3;
    const avarageMark = totalMark / 3;
    return avarageMark;
}
// System 01:
var value1 = 60;
var value2 = 59;
var value3 = 58;
const avarage = make_avg(value1, value2, value3);
console.log(avarage);
// System 02:
const avarage2 = make_avg(60, 58, 58);
console.log(avarage2);


