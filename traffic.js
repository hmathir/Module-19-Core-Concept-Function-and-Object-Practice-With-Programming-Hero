console.log('RUNNING IF/ELSE and Printing IF/ELSE RESULT')
console.log('===========================================')
var signal = 'red';
if (signal == 'red') {
    console.log("Don't Cross the road unill green");
}
else if (signal == 'yellow') {
    console.log("Stop now unill the light green");
}
else if (signal == 'green') {
    console.log("It's Green Now");
}
else {
    console.log("It's Not Red/ Green/ Yellow any more. check the signal very carefully!");
}


console.log('RUNNING SWITCH and Printing SWITCH RESULT')
console.log('===========================================')


var signal = 'yellow';
switch (signal) {
    case 'red':
        console.log("Don't Cross the road unill green");
        break;
    case 'yellow':
        console.log("Stop now unill the light green");
        break;
    case 'green':
        console.log("Its Green Now");
        break;
    default:
        console.log("It's Not Red/ Green/ Yellow any more. check the signal very carefully!");
}