function Employees(name, jobtitle, salary, status){
    this.Name = name;
    this.jobtitle = jobtitle;
    this.salary = salary;
    status ="Full Time";

    this.printEmployeeForm = function(){
        return "Name: " + name + ", Job Title: ";
    }
}

var employee1 = new Employees("Susan", "Nurse Manager", "10,000", "Part Time");
var employee2 = new Employees("Marcus", "Office Manager", "70,000", "Contract");;
var employee3 = new Employees("Michelle", "School Teacher", "15,000", "Full Time");;

var employee = [];

employee.push(employee1.printEmployeeForm());
employee.push(employee2.printEmployeeForm());
employee.push(employee3.printEmployeeForm());

console.log(employee);








