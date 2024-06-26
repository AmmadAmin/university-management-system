//create university mangement system

// step 1 create class

class University {
  departments: { name: string; students: Students[] }[] = [];

  addDepartments(name: string) {
    this.departments.push({ name: name, students: [] });
  }
  showDepartments() {
    console.log("Name Of Departments  In University:");
    this.departments.forEach((dept) => console.log(` * ${dept.name}`));
  }

  showStudents() {
    console.log("Students:");
    this.departments.forEach((dept) => {
      console.log(`- ${dept.name} Department:`);
      dept.students.forEach((student) =>
        console.log(` - ${student.name} - Balance:  ${student.balance}`)
      );
    });
  }
}

interface Students {
  name: string;
  courses: string[];
  balance: number;
}

// addDepartments Detail
const university = new University();
university.addDepartments("Computer Science");
university.addDepartments("Electrical Engineering");
university.addDepartments("Mechanical Engineering");

//addStudents Dtail

// computer science detail
university.departments[0].students.push({
  name: "Ammad Amin",
  courses: [],
  balance: 10000,
});

// Electrical Engineering
university.departments[1].students.push({
  name: "Zain Khan",
  courses: [],
  balance: 5000,
});

//machanical engineering
university.departments[2].students.push({
  name: "Eman Khan",
  courses: [],
  balance: 8000,
});

//involing
university.showDepartments();
university.showStudents();
