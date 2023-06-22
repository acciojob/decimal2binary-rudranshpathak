function decimalToBinary(decimal) {
  
  // Handle special case for 0
  if (decimal === 0) {
    return "0";
  }

  let binary = "";

  // Convert the decimal number to binary
  while (decimal > 0) {
    // Append the least significant bit (remainder) to the binary string
    binary = (decimal % 2) + binary;

    // Update the decimal number by dividing it by 2 (integer division)
    decimal = Math.floor(decimal / 2);
  }

  return binary;
}

module.exports = threeSum;
