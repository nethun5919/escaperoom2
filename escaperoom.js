var readlineSync = require('readline-sync');
var playerName = readlineSync.question("May I have yor name please?");

var introMessage = (`${playerName},Welcome to Escape Room Game Siulation! `);
console.log(introMessage);

var isAlive = true;
var hasKey = false;

while(isAlive == true);
const memuId = readlineSync.keyIn(`press 1 to Put hand in hole/n Press 2 to find the key, or/n Press 3 to Open the door`, {limit: `$<1-3>`});
  if (menuId == 1){
      console.log("you are dead!!! Game is Over");
      isAlive = false;
  }
      else if (menuId == 2 && haskey == false){
          console.log(`${playerNmae},you got the key, go to menu option 3 next.`);
          hasKey = true;
      }
          else if (menuId == 2 && hasKey === true){
          console.log(`${playerName}, you found it, do NOT WASTE your time,please proceed to menu options 3 next.`);
    }
       else if (menu == 3 && hasKey == false){
         console.log( `${playerName}, find the key first.`);
       }
         else if( menuId == 3 && hasKey == true){
             console.log( `${playerName}, you found the key and you opened the door, Congragulations, you escaped the room sucessfully`);
         }
  



    