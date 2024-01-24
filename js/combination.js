function getAllCombinations(str) {
    let result = [];

    function generateCombinations(current, remaining) {
        if (current !== "") {
            result.push(current);
        }

        for (let i = 0; i < remaining.length; i++) {
            const newCurrent = current + remaining[i];
            const newRemaining = remaining.slice(i + 1);
            generateCombinations(newCurrent, newRemaining);
        }
    }

    generateCombinations('', str);
    return result;
}
const inputString = prompt("Enter a Word");
if(inputString){
    const combinations = getAllCombinations(inputString);
    alert("All combinations: " + combinations.join(', '));
}
else alert("Invalid");
