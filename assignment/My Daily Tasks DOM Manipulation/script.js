

let addButton = document.querySelector("#addBtn");

let todoWrapper = document.querySelector(".todo-wrapper");

addButton.addEventListener("click",()=>{
    let userInput = document.querySelector("#userInput").value;

    if (userInput.length > 5 ) {

        let li = document.createElement("li");
        let text = document.getElementById("userInput");

        li.className = "todo";

        let checkBox = document.createElement("input");
        checkBox.type = "checkBox";
        checkBox.id ="todo-list";

        li.appendChild(checkBox);
        li.appendChild(document.createTextNode(text.value));

        todoWrapper.appendChild(li);

        document.querySelector("#userInput").value="";


    } else {
        alert("It must be greater than 5 characters");
    }

});

let deleteItems = function(){

    let ul = document.getElementById("listings");

    let items = ul.getElementsByTagName("li");

    for (let i = 0; i < items.length; i++ ) {
        if (items[i].firstChild.checked) {
            ul.removeChild(items[i]);
            i -= 1;
        }

    }
}

