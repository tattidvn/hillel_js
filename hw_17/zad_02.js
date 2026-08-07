class Coach {
    constructor(name, specialization, rating) {
        this.name = name;
        this.specialization = specialization;
        this.rating = rating;
    }
    info(){
        return `${this.name}, ${this.specialization}`;
    }
    rate(){
        return `${this.rating}`
    }
}

const person1 = new Coach('Mike', 'Yoga', 5.0);
console.log(person1.info());
console.log(person1.rate());

const person2 = new Coach ('Bob', 'Fitness', 4.8)
console.log(person2.info());
console.log(person2.rate());
