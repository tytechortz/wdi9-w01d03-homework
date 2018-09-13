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

*/

//4. Fizz Buzz

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
        
    
