// Task1:Function_with_variable
function subtract(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    } else {
        throw new Error('Both parameters must be numbers');
    }
}
console.log(subtract(10, 5)); // 5

// Task2:Handling_Null_and_Undefined
function greet(firstName, lastName, age) {
    if (age !== undefined) {
        return `${firstName} ${lastName}'s age is ${age}.`;
    } else {
        return `${firstName} ${lastName}'s age is not provided.`;
    }
}
console.log(greet("John", "Doe", 30)); // "John Doe's age is 30."

// Task3:Utilizing_Template_Literals
function interpolate(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        let sum = num1 + num2;
        return `${num1}+${num2}=${sum}`;
    } else {
        throw new Error('Both parameters must be numbers');
    }
}

console.log(interpolate(5, 3)); // "5+3=8"
