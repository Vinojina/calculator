




function calculate(operation) {
    // Get input values
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let output = document.getElementById("output");
    
    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        output.textContent = "Please enter valid numbers.";
        return;
    }

    let result;
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                output.textContent = "Cannot divide by zero!";
                return;
            }
            result = num1 / num2;
            break;
        default:
            output.textContent = "Invalid operation.";
            return;
    }

    // Display result
    output.textContent = `Result: ${result}`;
}