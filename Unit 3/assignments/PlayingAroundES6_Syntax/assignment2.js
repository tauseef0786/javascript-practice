const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  
  function highestPaid(employeeList) {
    return employeeList.reduce((highest, employee) => {
      return (employee.salary > highest.salary) ? employee : highest;
    }, employeeList[0]);
  }
  
  console.log(highestPaid(employees)); // Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }
  

  function destructuringToSwap(employeeList) {
    const [first, ...middle] = employeeList;
    const last = middle.pop(); 
    return [last, ...middle, first];
  }
  
  console.log(destructuringToSwap(employees));
  // Output: [ { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }, { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 }, { name: 'John Doe', age: 30, department: 'HR', salary: 50000 } ]