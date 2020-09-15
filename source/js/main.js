// Moment 3 Kate Tran

// Variabler
var todoList = document.getElementById("todolist");
var newTodo = document.getElementById("newtodo");
var newtodobutton = document.getElementById("newtodobutton")

function addItem() {
    var text = document.getElementById("newtodo").value;
    
    // Skapa ny article
    var article = document.createElement("article");
    article.innerText = text;
    article.addEventListener("click", deleteItem);

    // Lägg till article i listan
    todoList.appendChild(article);
    newTodo.value = ""; //Töm input
    newtodobutton.setAttribute("disabled", "disabled"); //Avaktivera knappen

    // Uppdatera local storage
    storeItem();
}

function deleteItem(e) {
    // Ta bort article
    e.srcElement.outerHTML = "";

    // Uppdatera local storage
    storeItem();
}

function checkItemText() {
    var text = newTodo.value;
    var message = document.getElementById("message");

    if (text.length < 5) {
        message.innerText = "Ange minst fem tecken";
        newtodobutton.setAttribute("disabled", "disabled");
    }
    else {
        message.innerText = "";
        newtodobutton.removeAttribute("disabled");
    }
}

function clearStorage() {
    todoList.innerHTML = ""; //Töm listan
    localStorage.clear(); //Töm local storage
}

window.onload = function() {
    newtodobutton.setAttribute("disabled", "disabled"); //Avaktivera knappen som standard
    loadStorage();
}

document.getElementById("newtodobutton").addEventListener("click", addItem);
document.getElementById("clearbutton").addEventListener("click", clearStorage);
newTodo.addEventListener("input", checkItemText); // Anropas när texten ändras

