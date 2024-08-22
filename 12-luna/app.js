const card = "4561-2612-1234-5464";
const card2 = "4561-2612-1234-5467";

function lunaCheck(cardNumber) {
  let num = cardNumber.replaceAll("-", "");
  if (!isNaN(Number(num))) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
      if (i % 2 === 0) {
        let k = num[i] * 2;
        if (k > 9) {
          k -= 9;
        }
        sum += Number(k);
      } else {
        sum += Number(num[i]);
      }
    }
    if (sum % 10 === 0) {
      console.log(`Sum = ${sum}`);
      return true;
    } else {
      console.log(`Sum = ${sum}`);
      return false;
    }
  }
}

console.log(`Card ${card}: ${lunaCheck(card)}`);
console.log("*******");
console.log(`Card ${card2}: ${lunaCheck(card2)}`);
