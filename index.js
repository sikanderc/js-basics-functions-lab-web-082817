// Code your solution in this file!
const scuberHq = 42;
const feetInBlock = 264;

function distanceFromHqInBlocks(pickUpLocation) {
  return Math.abs(pickUpLocation - scuberHq);
}

function distanceFromHqInFeet(pickUpLocation) {
  return distanceFromHqInBlocks(pickUpLocation) * feetInBlock;
}

function distanceTravelledInFeet(point1, point2) {
  return Math.abs(point1 - point2) * feetInBlock;
}

function calculatesFarePrice(start, destination) {
  const feetTraveled = distanceTravelledInFeet(start, destination)
  if (feetTraveled < 400) {
    return 0
  } else if (feetTraveled >= 400 && feetTraveled < 2000 ) {
    return feetTraveled * .02
  } else if (feetTraveled >= 2000 && feetTraveled < 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }

}
