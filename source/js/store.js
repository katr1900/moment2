function loadStorage() {
    var data = localStorage.getItem("todo");

    if (data) { //Om data finns
        var todos = JSON.parse(data);
        
        for(var i=0; i<todos.length; i++) {
            var article = document.createElement("article");
            article.innerText = todos[i];
            article.addEventListener("click", deleteItem);
    
            todoList.appendChild(article);
        }
    }
}

function storeItem() {
    var articles = todoList.getElementsByTagName("article");

    var todos = [];

    // Loopa genom arrayen
    for(var i=0; i<articles.length; i++) {
        todos.push(articles[i].innerHTML);
    }

    var jsonStr = JSON.stringify(todos); // Gör till string

    localStorage.setItem("todo", jsonStr); // Spara i local storage
}