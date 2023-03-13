function add(a, b) {
    return (a + b);
}
function substract(a, b) {
    return (a - b);
}
function multiply(a, b) {
    return (a * b);
}
function divide(a, b) {
    return (a / b);
}
function operate(a, b, operation) {
    let result;
    if (operation == "+")
        result = add(a, b);
    else if (operation == "-")
        result = substract(a, b);
    else if (operation == "*")
        result = multiply(a, b);
    else if (operation == "/")
        result = divide(a, b);
    return (Math.round((result + Number.EPSILON) * 100) / 100);
}
export { operate };
