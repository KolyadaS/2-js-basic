const positionLatitude = 5;
const positionLongitude = 10;
const destinationLatitude = 10;
const destinationLongitude = 0;

let distance = 0;

distance = Number(
  ((destinationLatitude - positionLatitude) ** 2 +
    (destinationLongitude - positionLongitude) ** 2) **
    0.5
);

console.log(`Расстояние: ${distance}`);
