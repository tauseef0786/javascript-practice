const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };
  
//  task1: 
function countCalculation(school) {
    return {
      mathTeachersCount: school.departments.math.teachers,
      historyTeachersCount: school.departments.history.teachers,
      mathStudentsCount: school.departments.math.students,
      historyStudentsCount: school.departments.history.students,
    };
  }

console.log(countCalculation(school))
//  Output: {  
//   mathTeachersCount: 5,
//   historyTeachersCount: 3,
//   mathStudentsCount: 150,
//   historyStudentsCount: 100
// }


// task2:
function findTopStudent(school, subject) {
  let topStudent = null;
  let highestScore = -Infinity;

  for (const student of school.students) {
    const score = student.scores[subject];
    if (score > highestScore) {
      highestScore = score;
      topStudent = student;
    }
  }

  return topStudent;
    }

console.log(findTopStudent(school, 'math'));
// Output:
// {
//   name: 'Alice',
//   className: 'Grade 5',
//   scores: { math: 95, science: 88, history: 85, english: 92 }
// }


// task3:
function addNewDept(school, newDepartment) {
    const { name, teachers, students } = newDepartment;
  
    school.departments[name] = { teachers, students };
  
    if (!school.courses.includes(name)) {
      school.courses.push(name);
    }
  
    return school;
  }
  
  const newDepartment = {
    name: 'art',
    teachers: 2,
    students: 50
  };
  
  console.log(addNewDept(school, newDepartment));
// Output = {
//   name: 'XYZ School',
//   establishYear: 1990,
//   departments: {
//     math: { teachers: 5, students: 150 },
//     science: { teachers: 4, students: 120 },
//     history: { teachers: 3, students: 100 },
//     english: { teachers: 4, students: 130 },
//     art: { teachers: 2, students: 50 }
//   },
//   courses: [ 'math', 'science', 'history', 'english' ],
//   students: [
//     { name: 'Alice', className: 'Grade 5', scores: [Object] },
//     { name: 'Bob', className: 'Grade 4', scores: [Object] },
//     { name: 'Charlie', className: 'Grade 5', scores: [Object] },
//     { name: 'Diana', className: 'Grade 4', scores: [Object] }
//   ]
// }


// task4:
function highestStudentCountDepartment(school) {
    let maxStudents = -Infinity;
    let departmentWithMaxStudents = '';
  
    // Iterate over the departments to find the one with the highest number of students
    for (const [department, data] of Object.entries(school.departments)) {
      if (data.students > maxStudents) {
        maxStudents = data.students;
        departmentWithMaxStudents = department;
      }
    }
  
    return departmentWithMaxStudents;
  }
  
  // Example usage:
  console.log(highestStudentCountDepartment(school)); // Output: 'math'
 


// task5:
function generateGreeting(name, language = 'English') {
    const greetings = {
      English: `Hello, ${name}!`,
      Spanish: `¡Hola, ${name}!`,
      French: `Bonjour, ${name}!`,
    };
  
    return greetings[language] || greetings['English'];
  }
  
  console.log(generateGreeting("Alice")); // Output: "Hello, Alice!"
  console.log(generateGreeting("Bob", "Spanish")); // Output: "¡Hola, Bob!"
  console.log(generateGreeting("Charlie", "French")); // Output: "Bonjour, Charlie!"
  


