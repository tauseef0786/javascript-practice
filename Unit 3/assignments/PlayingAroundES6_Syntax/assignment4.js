const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];

function combiningArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(combiningArrays(fruits, vegetables)); // Output: [ 'apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach' ]


// task2:
const person = { name: "John", age: 30, address: "123 Main St" };

function cloningObjects(obj) {
  return Object.assign({}, obj);
}

console.log(cloningObjects(person)); // Output: { name: "John", age: 30, address: "123 Main St" }


// task3:

const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };

function mergingObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

console.log(mergingObjects(student, course));
// Output: { name: 'Alice', age: 20, courseName: 'Math', teacher: 'Mr. Smith' }


// task4:
const array1 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const array2 = [
  [7, 8],
  [9, 10],
  [11, 12],
];

function combiningNestedArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log(combiningNestedArrays(array1, array2));
// Output: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [ 11, 12 ] ]
