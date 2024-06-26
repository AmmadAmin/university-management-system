//create university mangement system
// step 1 create class 
var University = /** @class */ (function () {
    function University() {
        this.departments = [];
    }
    University.prototype.addDepartments = function (name) {
        this.departments.push({ name: name, students: [] });
    };
    University.prototype.showDepartments = function () {
        console.log("Name Of Departments  In University:");
        this.departments.forEach(function (dept) { return console.log(" * ".concat(dept.name)); });
    };
    University.prototype.showStudents = function () {
        console.log("Students:");
        this.departments.forEach(function (dept) {
            console.log("- ".concat(dept.name, " Department:"));
            dept.students.forEach(function (student) { return console.log(" - ".concat(student.name, " - Balance:  ").concat(student.balance)); });
        });
    };
    return University;
}());
// addDepartments Detail
var university = new University();
university.addDepartments("Computer Science");
university.addDepartments("Electrical Engineering");
university.addDepartments("Mechanical Engineering");
//addStudents Dtail
// computer science detail
university.departments[0].students.push({ name: "Ammad Amin", courses: [], balance: 10000 });
// Electrical Engineering
university.departments[1].students.push({ name: "Zain Khan", courses: [], balance: 5000 });
//machanical engineering
university.departments[2].students.push({ name: "Eman Khan", courses: [], balance: 8000 });
//involing 
university.showDepartments();
university.showStudents();
