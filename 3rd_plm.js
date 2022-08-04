/*
Challenging: Write a function called make_avg() which will take an array of integers and
the size of that array and return the average of those values. */


var array = [1, 2, 3, 4, 55, 66, 775, 334];
function make_avg(items) {
    sum = 0;
    items.forEach(element => {
        sum = sum + element;
    });
    var avarage = sum / array.length;
    return avarage;
}
var avarageMarks = make_avg(array);
console.log(avarageMarks);


// var arry = [60, 59, 58];

// function calculateAverage(array) {
//     var total = 0;
//     var count = 0;

//     array.forEach(function (item) {
//         total = total + item;
//         count++;
//     });

//     return total / count;
// }

// console.log(calculateAverage(arry));



// var intArray = [10, 20, 30];
// function make_avg(array) {
//     var sum = 0;
//     var elements = 0;

//     array.forEach(function (item) {
//         sum = sum + item;
//         elements++;
//     });
//     return sum / elements;
// }

// var avarageIs = make_avg(intArray);
// console.log(avarageIs);

// var inta = [60, 59, 58];
// function make_avg(int) {
//     var sum = 0;
//     int.forEach((items) => {
//         sum = sum + items;
//     });
//     var avarage = sum / inta.length;
//     console.log(avarage);
// }
// make_avg(inta);


// var array = [10, 20, 30, 40, 50];
// function make_avg(item) {
//     var sum = 0;
//     item.forEach(element => {
//         sum = sum + element;
//     });
//     var avarage = sum / array.length;
//     console.log(avarage);
// }
// make_avg(array);



// var array = [10, 20, 30, 40, 50, 60, 100];
// var sum = 0;
// for (var element of array) {
//     sum = sum + element;
// }
// var ava = sum / array.length;
// console.log(ava);



