const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => (b !== 0 ? a / b : "Cannot divide by zero!")
};

function calculate(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let output = document.getElementById("output");

    output.textContent = isNaN(num1) || isNaN(num2) 
        ? "Please enter valid numbers." 
        : `Result: ${operations[operation](num1, num2)}`;
}
