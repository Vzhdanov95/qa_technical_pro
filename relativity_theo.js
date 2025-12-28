function getRandomInt(min = 100, max = 1000) {
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}
/*  Wanted to make it with:
min = Math.ceil(min);
max = Math.floor(max);
to make them all as whole numbers  */


function checkProbabiltyTheory(count){
  let countEven = 0;
  let countOdd = 0;

  for(let i = 0; i < count; i++){
    let num = getRandomInt();
    if (num % 2 ===0){
      countEven ++;
    } else {
      countOdd++;
    }
  }

  let evenPercent = (countEven / count * 100)
  let oddPercent = (countOdd / count * 100)

  // (countEven / count * 100) - формула відсотків
  // (countOdd / count * 100) - формула відсотків
    // num % 2 === 0 - перевірка парних чисел
    // num % 2 !== 0 - перевірка не парних чисел

console.log("Number of generated values:", count);
console.log("Number of even values:", countEven);
console.log("Number of odd values:", countOdd);
console.log("Even percentage:", evenPercent + "%");
console.log("Odd percentage:", oddPercent + "%");


}

checkProbabiltyTheory(300)

// тобто я все ж таки задаю кількість чисел. 
