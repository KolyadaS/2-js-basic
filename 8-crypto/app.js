const myPassword = "password";
const wrongHash = "wrong";

function crypto(password) {
  let array = password.split("");
  let hash = array
    .slice(0, 4)
    .reverse()
    .concat(array.slice(4).reverse())
    .join("");
  return hash;
}

function check(hash, password) {
  if (crypto(hash) === password) {
    return true;
  } else {
    return false;
  }
}

const myHash = crypto(myPassword);
const isAccepted1 = check(myHash, myPassword);
console.log(`${myPassword} - ${myHash} => ${isAccepted1}`);

const isAccepted2 = check(wrongHash, myPassword);
console.log(`${myPassword} - ${wrongHash} => ${isAccepted2}`);
