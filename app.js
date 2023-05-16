var input = document.getElementById("todoInput")
var ulParent = document.getElementById("ulParent")


function addTodo() {
    if (!input.value) {
        alert("ENTER YOUR TODO")
        return
    }
    var licode = document.createElement("li")
    var liTxt = document.createTextNode(input.value)
    licode.appendChild(liTxt)

    licode.className = "list-group-item d-flex align-items-center justify-content-between"


    var div = document.createElement("div")
    var changebtns = document.createElement("button")


    var deleteBtn = document.createElement("button")
    changebtns.innerHTML = "EDIT"
    changebtns.setAttribute("onclick", "editTodo(this)")

    deleteBtn.innerHTML = "DELETE"

    deleteBtn.setAttribute("onclick", "deleteTodo(this)")



    changebtns.className = "btn btn-info"
    deleteBtn.className = "btn btn-danger"


    div.appendChild(changebtns)

    div.appendChild(deleteBtn)
    licode.appendChild(div)

    ulParent.appendChild(licode)


    input.value = ""
}

function editTodo(el) {
    console.log("editTodo()", el.parentNode.parentNode.
        firstChild.nodeValue)
    var li = el.parentNode.parentNode

    
    var placeHolder = li.firstChild.nodeValue
    var editValue = prompt("Edit Todo", placeHolder)


    console.log("editValue", editValue)
    li.firstChild.nodeValue = editValue

}

function deleteTodo(elem) {
    elem.parentNode.parentNode.remove()
}

function deleteAll(){
    ulParent.innerHTML = ""
  }
  