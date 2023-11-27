function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (!this.marks) {return 0}
    this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
    let sumMarks = 0
    if (!this.marks)
    {return 0}
    else{
    if ((this.marks.length === 0)){
        return 0;
  }}
  for (let i = 0; i<this.marks.length;i++)
  {
    sumMarks = sumMarks + this.marks[i]
  }
  return(sumMarks/this.marks.length)
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason
}
