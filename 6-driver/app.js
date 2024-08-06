const hasLicence = true;
const age = 18;
const isDrunk = false;

let canDrive = hasLicence && age >= 18 && !isDrunk;
console.log(`Можно вести машину? ${canDrive ? "Да" : "Нет"}`);
