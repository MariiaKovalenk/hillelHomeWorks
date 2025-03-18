const user = {
    name: 'Alise',
    age: '25',
    location: 'London',

    getData: function () {
        const userData = `Name: ${this.name}; Age: ${this.age}; Location: ${this.location}`;
        console.log(userData);
        return userData;
    }
};

user.getData();