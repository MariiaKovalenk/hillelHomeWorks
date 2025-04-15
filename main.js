class BankAccount {
        balance = 0;
        _accountNumber;

        constructor(ownerName, initialBalance = 0) {
            this.ownerName = ownerName;
            this._accountNumber = BankAccount.#generateAccountNumber();
            this.balance = initialBalance;
        }

        getBalance() {
            return this.balance;
        }

        deposit(amount) {
            if(amount <= 0) {
                return;
            }
            this.balance += amount;
            this.#logTransaction(`Deposited ${amount}`);
        }

    withdraw(amount) {
        if(amount <= 0 || amount > this.balance) {
            return;
        }
        this.balance -= amount;
        this.#logTransaction(`Withdraw ${amount}`);
    }

    #logTransaction(message) {
            console.log(`[Account #${this._accountNumber} - ${this.ownerName}: ${message}]`);
    }

    static #nextAccountNumber = 1;
    static #generateAccountNumber() {
            return this.#nextAccountNumber++;
    }
}

const account1 = new BankAccount("Alex Fill",1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300


