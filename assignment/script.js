let oddEven;

function counting(oddEven) {

    if (isNaN(oddEven)) {
        console.log("Not a number");            
    } else if (oddEven == ''){
        console.log("Invalid input");
    } else if (oddEven % 2 == 0) {
        console.log("Even");
    } else if (oddEven % 2 == 1) {

        console.log("Odd");
    }
}
let userInput = prompt("Enter a number");
counting(userInput);