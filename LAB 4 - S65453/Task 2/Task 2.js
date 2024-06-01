function sumOfDigits() {
    let number = parseInt(prompt("Enter a number to find sum of its digits:"));
    let sum = calculateSumOfDigits(number);
    document.getElementById("output").innerText = `Sum of digits of ${number} is: ${sum}`;
}

function calculateSumOfDigits(number) {
    if (number === 0) {
        return 0;
    } else {
        return (number % 10) + calculateSumOfDigits(Math.floor(number / 10));
    }
}

function power(x, y) {
    let result = calculatePower(x, y);
    document.getElementById("output").innerText = `${x} raised to the power ${y} is: ${result}`;
}

function calculatePower(x, y) {
    if (y === 0) {
        return 1;
    } else if (y > 0) {
        return x * calculatePower(x, y - 1);
    } else {
        return 1 / calculatePower(x, -y);
    }
}