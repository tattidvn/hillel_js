class BankAccount {
    constructor(balance) {
        this._balance = balance;
    }
    get balance() {
        return this._balance;
    }
    deposit(amount) {
        this._balance += amount;
    }

    withdraw(amount) {
        this._balance -= amount;
    }
}

const p1 = new BankAccount(5000)
console.log(p1.balance);
p1.deposit(500)
p1.withdraw(100)
console.log(p1.balance);
