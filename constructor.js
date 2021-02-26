function Employees(name, jobtitle, salary, status){
    this.Name = name;
    this.jobtitle = jobtitle;
    this.salary = salary;
    status ="Full Time";

    this.printEmployeeForm = function(){
        return "Name: " + name + ", Job Title: ";
    }
}

var employee1 = new Employees("Susan", "Nurse Manager", "75,000", "Part Time");
var employee2 = new Employees();
var employee3 = new Employees();

var employee = [];

employee.push(employee1.printEmployeeForm());
employee.push(employee2.printEmployeeForm());
employee.push(employee3.printEmployeeForm());

console.log(employee);








