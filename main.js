function Student(firstName, lastName, birthYear, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades;
    this.attendance = new Array(25).fill(null);
    this._attendanceIndex = 0;

    this.getAge = function () {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    };

    this.getAverageGrade = function () {
        if (this.grades.length === 0)
            return 0;

        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    };

    this.present = function () {
        if (this._attendanceIndex < 25) {
            this.attendance[this._attendanceIndex++] = true;
        } else {
            console.log("Відвідуваність уже повністю заповнена.");
        }
    };

    this.absent = function () {
        if (this._attendanceIndex < 25) {
            this.attendance[this._attendanceIndex++] = false;
        } else {
            console.log("Відвідуваність уже повністю заповнена.");
        }
    };

    this.getAverageAttendance = function () {
        const visited = this.attendance.filter(a => a !== null);
        if (visited.length === 0)
            return 0;
        const presentCount = visited.filter(a => a === true).length;
        return presentCount / visited.length;
    };

    this.summary = function () {
        const avgGrade = this.getAverageGrade();
        const avgAttendance = this.getAverageAttendance();

        if (avgGrade > 90 && avgAttendance > 0.9) {
            return "Молодець!";
        } else if (avgGrade > 90 || avgAttendance > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    };
}

const student1 = new Student("Андрій", "Іваненко", 2002, [95, 98, 92, 94]);

const student2 = new Student("Анна", "Захаренко", 2003, [80, 85, 78]);

//використаємо цикли для імітації відвідування:
for (let i = 0; i < 23; i++) student1.present();
for (let i = 0; i < 2; i++) student1.absent();

for (let i = 0; i < 15; i++) student2.present();
for (let i = 0; i < 10; i++) student2.absent();

console.log(`${student1.firstName} ${student1.lastName}:`);

console.log("Вік:", student1.getAge());

console.log("Середній бал:", student1.getAverageGrade());

console.log("Відвідуваність:", student1.getAverageAttendance());

console.log("Підсумок:", student1.summary());

console.log("\n-------------------\n");

console.log(`${student2.firstName} ${student2.lastName}:`);

console.log("Вік:", student2.getAge());

console.log("Середній бал:", student2.getAverageGrade());

console.log("Відвідуваність:", student2.getAverageAttendance());

console.log("Підсумок:", student2.summary());