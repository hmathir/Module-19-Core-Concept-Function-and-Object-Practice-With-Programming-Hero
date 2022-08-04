/*
Write a function called odd_even() which takes an integer value and tells whether this
value is even or odd. You need to do it in 4 ways:
● Has return + Has parameter
● No return + Has parameter
*/

//● Has return + Has parameter
function odd_even(int) {
    const result = (int % 2 == 0) ? "even" : "odd";
    return result;
}
var done = odd_even(4);
console.log(done);

//● No return + Has parameter
function odd_even2(int) {
    const result = (int % 2 == 0) ? "even" : "odd";
    console.log(result);
}
odd_even2(3);