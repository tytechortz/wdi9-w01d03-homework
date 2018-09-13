/*
//1. Easy Going

for(let i = 1; i <= 20; i++) {
    console.log(i);
}
*/

//2. Get Even
/*
for (let i = 0; i <=200; i+=2) {
    console.log(i);

}
*/

//3. Excited Kitten
/*
for(let i = 0; i < 20; i++) {
    console.log('Love me, pet me! HSSSSSS!');
    if (i % 2 === 0) {
  let ranNum = Math.floor(Math.random() * 3);
  //console.log(ranNum);
    if (ranNum === 0) {
        console.log("...human...why you taking pictures of me?...");
          }  else if (
        ranNum === 1) {
            console.log("...the catnip made me do it...");
        } else if 
        (ranNum === 2) {
            console.log("...why does the red dot always get away...");
        }
        }
    }

*/
//4. Fizz Buzz
/*
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');  
    } else if  (i % 5 === 0) {
    console.log('Buzz');
     } else  if (i % 3 === 0) {
     console.log('Fizz');
     } else 
     console.log(i);
    }
  */
 
//5. Getting to Know You
/*
const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

//6 Getting to Know You
//1.
shahzad.splice(0, 1,'Gameboy');
console.log(shahzad);

//2.
ageDaniel = daniel[1];
const newAgeDaniel = (ageDaniel + 1);
daniel.splice(1, 1, newAgeDaniel);
console.log(daniel);

//3.
ryan.splice(2, 1, 'Gotham City');
console.log(ryan);

//4.
reuben.pop();
reuben.push("Chicago");
console.log(reuben);

//5.
jim.splice(2, 1, "Moscow", "Havana", "Rancho Cucamomga");
console.log(jim);

//6.
jim.splice(2, 1);
console.log(jim);

*/
/*
ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo' ];

for(let i = 0; i < ninjaTurtles.length; i++) {
   ninjaTurtles[i] = ninjaTurtles[i].toUpperCase();
}
console.log(ninjaTurtles);
*/

//Return of the Closets

//1.
/*
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];


thomsCloset[2].push(kristynsCloset[0]);
console.log(thomsCloset);
kristynsCloset.splice(0, 1)

console.log(kristynsCloset);
*/