const phoneBook = {
    contacts: [
        {name:'Alice', phone: '+3806549593', email: 'alise@fgs.com'},
        {name:'Bob', phone: '+3806549544', email: 'bob@fgs.com'},
        {name:'Bob', phone: '+3806549544', email: 'bob123@fgs.com'}],
    getContactInfo(name) {
        return this.contacts.find((element) => {
            return name === element.name;
        });
        // this.contacts.filter((element) => {
        //     return name === element.name;
        // });
    },
    addContact(name, phone, email){
        this.contacts.push({name: name, phone: phone, email: email });
        // this.contacts.push({ name, phone, email });
    }
}




phoneBook.addContact("Anna", "+380965556868", "jsfa@gm.com");
phoneBook.getContactInfo("Bob");