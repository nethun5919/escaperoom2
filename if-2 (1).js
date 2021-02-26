var a = 5;
var b = 3
if (a>b){

    console.log("is greater then")
}

var strCat = "cat";  
if (strCat.length()==3){
console.log ("is the length");
}
else{
console.log ("not the length");
}

var cat =13;
var dog = 5;

if (cat>dog){
console.log("this is larger");
}
else {
console.log("it is not equal");
}

var person = {
    firstName: "Bobby",
    age: 12
}
if (person.age > 18) {
    console.log(person.firstName + "is allowed to go to the movie");
}
else (person.firstName < 18) {
    console.log(person.firstName + "is not allowed to go to the movie");
}
if (person.firstName.charAt(0) == "B") {
    console.log(person.firstName + "can go to the movie");
}
else {
    console.log(person.firstName + "can't go to the movie");
}
   
    if (person.age > 18 && person.firstName.charAt(0) ==="B") {
        console.log(person.firstName + "is allowed to go to the movie");
    }

else{
    console.log ("is not allowed to go to the movie");
}



var i ="1"

if (i==1){
    console.log ("strict");
}
else if (i-"1")
{
console.log("not equal");
}

else {
   console.log("not equal");
}

var i=1
if(i<=2 && 2 ===4){
    console.log ("yes");
}
else{
    console.log("no");
}