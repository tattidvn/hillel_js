function Student(name, surname, year, marks) {
    this.name = name
    this.surname = surname
    this.year = year
    this.marks = marks
    this.visits = []
}

Student.prototype.getAge = function () {
    return 2026 - this.year
}

Student.prototype.getAvgMark = function () {
    const sum = this.marks.reduce((acc, item) => acc + item, 0)
    return sum / this.marks.length
}

Student.prototype.present = function () {
    if (this.visits.length < 25) {
        this.visits.push(true)
    }
    else {
        console.log('всього 25 комірок')
    }
}

Student.prototype.absent = function () {
    if (this.visits.length < 25) {
        this.visits.push(false)
    }
    else {
        console.log('всього 25 комірок')
    }
}

Student.prototype.summary = function () {
    const studentVisits = this.visits.filter(item => item === true).length
    const visits = 25
    const avgVisit = studentVisits / visits
    const avgMark = this.getAvgMark()
    console.log("оцінка:", avgMark, "відвідув:", avgVisit)
    if (avgVisit > 0.9 && avgMark > 90){
        return 'молодець'
    }
    else if (avgVisit < 0.9 && avgMark < 90){
        return 'редиска'
    }
    else {
        return 'добре'
    }
}

const s1 = new Student("Anna", "Brown", 2005, [60, 75, 80, 65])
s1.absent()
s1.absent()
s1.absent()
s1.present()
s1.absent()
s1.present()
s1.present()
console.log(s1)
console.log(s1.getAge())
console.log(s1.summary())

const s2 = new Student('Tom', 'Green', 2001, [90, 90, 90, 90, 90])
s2.present()
s2.present()
s2.present()
s2.present()
s2.present()
s2.absent()
s2.absent()
s2.absent()
console.log(s2)
console.log(s2.getAge())
console.log(s2.summary())


const s3 = new Student ('Bob', 'White', 2003, [60, 65, 70, 60, 65, 60, 75])
s3.present()
s3.present()
s3.absent()
s3.absent()
s3.absent()
s3.present()
s3.present()
console.log(s3)
console.log(s3.getAge())
console.log(s3.summary())