function casechanger(){
    mytext = "Hudson",
    mytext = mytext.toUpperCase() + mytext.toLowerCase(),
    console.log(mytext);
}

casechanger();


var str2= "The day is a slow one for a Monday";
var num= str2.length /2;
result = Math.floor(num);

console.log(result);


var str3="lmnop";
var num = str3.length /2;
console.log(str3.slice(0,num));

function casechecker(str3) {
    var num = str3.length /2;
    var sliced1 = str3.slice(0,num);
    var sliced2 = str3.slice(str3.length - num, str3.length);
    if (str3.length % 2 == 0) {
        console.log(sliced1.toUpperCase() + sliced2.toLowerCase());
    } else {
        console.log(sliced1.toLowerCase() + sliced2.toUpperCase());
    }
}

casechecker("Hello World") 



