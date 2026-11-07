class Student {
  constructor(id, name, grades, attendance) {
    this.id = id;
    this.name = name;
    this.grades = grades;
    this.attendance = attendance;
  }

  calculateAverage() {
    const total = this.grades.reduce((sum, g) => sum + g, 0);
    return total / this.grades.length;
  }

  getGrade(average) {
    if (average >= 90) return "A";
    else if (average >= 80) return "B";
    else if (average >= 70) return "C";
    else if (average >= 60) return "D";
    else if (average >= 50) return "E";
    else return "F";
  }

  getFinalResult() {
    const avg = this.calculateAverage();
    if (avg >= 50 && this.attendance >= 75) {
      return "ناجح";
    }
    return "يحتاج مراجعة";
  }
}

const studentsList = [
  new Student(1, "أحمد", [90, 85, 95], 90),
  new Student(2, "سارة", [45, 40, 48], 80),
  new Student(3, "محمد", [42, 47, 44], 70),
  new Student(4, "منى", [70, 65, 75], 60),
];

// تقرير كل الطلاب
console.log("===== تقرير الطلاب =====");
studentsList.forEach((s) => {
  const avg = s.calculateAverage();
  console.log(
    `الاسم: ${s.name} | المتوسط: ${avg.toFixed(2)} | التقدير: ${s.getGrade(avg)} | النتيجة: ${s.getFinalResult()}`
  );
});

// لجنة الرأفة
const strugglingStudents = studentsList.filter((s) => {
  const avg = s.calculateAverage();
  return avg >= 40 && avg <= 49;
});

const afterMercy = strugglingStudents.map((s) => ({
  id: s.id,
  name: s.name,
  oldAverage: s.calculateAverage(),
  newAverage: s.calculateAverage() + 5,
}));

const totalNewAverages = afterMercy.reduce((sum, s) => sum + s.newAverage, 0);

const mercyAverage =
  afterMercy.length === 0 ? 0 : totalNewAverages / afterMercy.length;

console.log("===== الطلاب المتعثرون بعد الرأفة =====");
console.log(afterMercy);

console.log("===== متوسط المتعثرين بعد التعديل =====");
console.log(mercyAverage.toFixed(2));