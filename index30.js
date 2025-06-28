function getRandomInteger(min, max) {
  
    // ensuring min and max are integers.
  min = Math.ceil(min);
  max = Math.floor(max);

  // Generate a random number between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage to get a random integer between 0 and 10
const randomNumber = getRandomInteger(-10, 10);
console.log(randomNumber);

