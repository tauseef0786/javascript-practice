// Task1:Object_Factory_Function
function objectFactory(fname, age) {
    age = Number(age);
    let obj = {};
    obj[fname] = age;
    return obj;
}
console.log(objectFactory("John", "25")); // { John: 25 }


// Task2:Grade_Classifier
function gradeClassifier(score) {
    score = Number(score);
    
    if (isNaN(score) || score < 0 || score > 100) {
        return "Invalid score";
    }

    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

console.log(gradeClassifier(85)); // "B"


// Task3:String_Manipulator
function stringManipulator(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        throw new Error('Both inputs must be strings');
    }
    if (str1.length === str2.length) {
        return str1 + str2;
    } else {
        return str1.length > str2.length ? str1 + str2 : str2 + str1;
    }
}
console.log(stringManipulator("hello", "world")); // "helloworld"
