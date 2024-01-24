function rotateArray(arr, n) {
    const length = arr.length;
    n = n % length; 
    const rotatedArray = arr.slice(n).concat(arr.slice(0, n));
    return rotatedArray;
}

const inputArray = prompt("Enter a list of integers separated by spaces:").split(' ').map(Number);
const rotateBy = parseInt(prompt("Enter the number of positions to rotate by:"));
if (!isNaN(rotateBy)) {
    const rotatedArray = rotateArray(inputArray, rotateBy);
    alert("Rotated Array: " + rotatedArray.join(' '));
} else {
    alert("Invalid input for rotation positions.");
}
