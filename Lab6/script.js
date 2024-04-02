const sortButton = document.getElementById('sortButton');
const numberInput = document.getElementById('numberInput');
const sortedOutput = document.getElementById('sortedOutput');

sortButton.addEventListener('click', function() {
    const numbersString = numberInput.value;
    if (!numbersString) {
        sortedOutput.textContent = "Please enter a list of numbers.";
        return;
    }

    // Split the string into an array of numbers, converting each string to a number
    const numbers = numbersString.split(',').map(num => Number(num.trim()));

    // Check if all inputs are valid numbers
    if (numbers.some(isNaN)) {
        sortedOutput.textContent = "Please enter valid numbers.";
        return;
    }

    // Implementing the bubble sort algorithm
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 0; j < numbers.length - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                // Swap numbers[j] and numbers[j + 1]
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }

    const sortedNumbersString = numbers.join(', ');

    sortedOutput.textContent = `Sorted List: ${sortedNumbersString}`;
});
