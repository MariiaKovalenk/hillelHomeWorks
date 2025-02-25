let birthYear = prompt ("В якому році Ви народився(-лась)?")
if (birthYear === null || birthYear.trim() === "") {
    alert("Шкода, що Ви не захотіли ввести свою дату народження.");
}

let city = prompt("В якому місті зараз проживаєте?")
if (city === null || city.trim() === "") {
    alert("Шкода, що Ви не захотіли ввести своє місто.");
}
let sport = prompt ("Який Ваш улюблений вид спорту?")
if (sport === null || sport.trim() === "") {
    alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
}

let currentYear = new Date().getFullYear();
let age = currentYear - Number(birthYear); // вік користувача;

let capitalMessage;
if (city === "Київ") {
    capitalMessage = "Ти живеш у столиці України.";
} else if (city === "Вашингтон") {
    capitalMessage = "Ти живеш у столиці США.";
} else if (city === "Лондон") {
    capitalMessage = "Ти живеш у столиці Великої Британії.";
} else {
    capitalMessage = city ? `Ти живеш у місті ${city}.` : '';
}

let sportMessage;
if (sport === "Біг") {
    sportMessage = "Круто! Хочеш стати як Усейн Болт?";
} else if (sport === "Футбол") {
    sportMessage = "Круто! Хочеш стати як Олександр Зінченко?";
} else if (sport === "Баскетбол") {
    sportMessage = "Круто! Хочеш стати як Олексій Лень?";
} else {
    sportMessage = sport ? `Круто! ${sport} - це дуже цікаво!` : '';
}

let ageMessage = birthYear ? `Твій вік ${age}.` : '';
if (capitalMessage || ageMessage || sportMessage) {// capitalMessage 'text' '', where 'text' - true, '' - false
    alert(`${capitalMessage} ${ageMessage} ${sportMessage}`)
}
