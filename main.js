let userLink = '';

function askLink() {
    const link = prompt("Введіть посилання");
    if(link){
        userLink = link;
        alert("Посилання збережено")
    }
}
function followLink() {
    if(userLink){
        window.location.href = userLink;}
    else {
        alert("Введіть посилання!");
    }
}