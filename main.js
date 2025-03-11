let ladder = {
        step: 0,
        up: function () { // підніматиме вас на одну сходинку
                this.step = this.step + 1;
                return this;
        },
        down: function () { // опускатиме вас на одну сходинку
                this.step = this.step - 1;
                return this;
        },
        showStep: function () { // показує поточну сходинку
                console.log(this.step);
        }
};

ladder.up().up().down().showStep(); // 1