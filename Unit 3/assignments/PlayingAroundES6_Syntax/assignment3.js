const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  

//   tsak1:the required information
  function employeeInformation(employeeList) {
    const secondEmployee = employeeList[1];
    
    return {
      secondEmployeeName: secondEmployee.name,
      secondEmployeeDepartment: secondEmployee.department,
    };
  }
  
  console.log(employeeInformation(employees));
  // Output: { secondEmployeeName: 'Jane Smith', secondEmployeeDepartment: 'Finance' }
  


//   task2:// Calculate the average salary
  function averageSalary(employeeList) {
    const totalSalary = employeeList.reduce((sum, employee) => sum + employee.salary, 0);
  
    
    const avgSalary = totalSalary / employeeList.length;
  
    return avgSalary;
  }
  
  console.log(averageSalary(employees)); // Output: 60000


// task3:  Calculate the bonus as 10% of the salary
  function thirdEmployeeInfo(employeeList) {
    const thirdEmployee = employeeList[2];
  
    const bonus = thirdEmployee.salary * 0.10;
      return `Employee: ${thirdEmployee.name}, Age: ${thirdEmployee.age}, Salary: ${thirdEmployee.salary}, Bonus: ${bonus}`;
  }
  
  console.log(thirdEmployeeInfo(employees)); // Output: "Employee: Alex Johnson, Age: 35, Salary: 70000, Bonus: 7000"