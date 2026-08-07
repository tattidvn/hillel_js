class Calculator {
    add (x, y) {
        return x + y
    }
    subtract (x, y){
        return x - y
    }
    multiply (x, y) {
        return x * y
    }
    divide (x, y) {
        return x / y
    }
}

const calc1 = new Calculator()
console.log(calc1.add(5, 10))
console.log(calc1.subtract(5, 8))
console.log(calc1.multiply(2, 7))
console.log(calc1.divide(16, 8))