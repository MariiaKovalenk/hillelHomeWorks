function processUserInputs(){
   let userInput;

    for (let i = 0; i < 10; i++) {
        userInput = Number(prompt("Enter number more than 100."));
        if (userInput > 100){
                console.log (userInput);
                return;
            }
            else {
                alert ("Please, enter correct number.");
            }
    }
    console.log(userInput);
}
processUserInputs();