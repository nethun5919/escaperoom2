function someNumbers(x,y){
    return x+y;
}

console.log(someNumbers(15,20));


function someNumbers2(x,y,z){
    return Math.max(x,y,z);
}

console.log(someNumbers2(15,220,10));





let num1 = 5;
let num2 = 2;



// if remainder is not 0 the number is odd
function evenOrOdd (num1) {
    if( num1 % 2 == 0) {
        num1 = "even"
    } else {
        num1 = "odd"
    }
    return num1;
}

console.log(evenOrOdd(132));



remainder = num1 % num2;


function findhalf (mytext) {
    if (mytext.length < 21) {
        return mytext + mytext;
    } else {
        let half = mytext.length / 2;
        return mytext.substr(0, half)
    }
} 

console.log(findhalf("sfsdfsfdsfleeanerytygvygytygytygybgbyyftytfyftftf"))


