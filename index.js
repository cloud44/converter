// Complete the following functions to make our program work!

/*
 * Block 13 Workshop: Temperature Converter.
 */

/** NOTE: In the orginal code it say "DONT (sic) NOT CHANGE THE CODE BELOW".
 * Normally this is a double negative, therefore you CAN change code below.
 * However, not knowing the history of this codebase I have opted to NOT change the code.
 **/

/**
 * Takes a F number and returns the number to C
 * @param {number} fahren temperature in degrees F
 * @returns {number} the number of degrees C.
 */
function convertToCelsius(fahren) {
  let celcius = (fahren - 32) * (5 / 9);
  return Math.round(celcius);
}

/**
 * Takes both numbers (F, C) and display a message with
 * both numbers and how that temp makes you feel using
 * this chart.
 *
 *   Temp      Feels
 * ---------|----------
 *   < 32   |  "very cold"
 *   < 64   |  "cold"
 *   < 86   |  "warm"
 *   < 100  |  "hot"
 *
 * @param {number} fahren
 * @param {number} celc
 */
function createMessage(fahren, celc) {
  let tempFeeling = "";
  if (fahren < 32) {
    tempFeeling = "very cold";
  }
  else if (fahren < 64) {
    tempFeeling = "cold";
  }
  else if (fahren < 86) {
    tempFeeling = "warm";

  } else if (fahren < 100) {
    tempFeeling = "hot";
  }

  // Return text string (Message) to calling function. //
  return "With a temperature of " + fahren + " Farenheit, it feels " + tempFeeling + ". This is the equivalent of " + celc + " Celcius.";
}

/**
 * Takes a number and returns a random integer from 0 to the limit
 * @param {number} limit
 * @returns {number} a number between 0 and the int passed in.
 */
function rand(limit) {
  let randomTemperature = Math.random() * limit;

  return Math.round(randomTemperature);
}

// -------------------- DONT NOT CHANGE THE CODE BELOW ---------------------- //

let fahren = prompt(
  "enter a number, we will convert that number from fahrenheit to celcius"
);
let celc = convertToCelsius(fahren);
let output = createMessage(fahren, celc);
console.log(output);

fahren = prompt(
  "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
);

celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);
