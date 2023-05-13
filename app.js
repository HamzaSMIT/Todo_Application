var input = document.getElementById("todoInput")
var ulParent = document.getElementById("ulParent")


function addTodo() {
    if (!input.value) {
        alert("ENTER TODO VALUEs")
        return
    }
    var liElement = document.createElement("li")
    var liTxt = document.createTextNode(input.value)
    liElement.appendChild(liTxt)
    liElement.className = "list-group-item d-flex align-items-center justify-content-between"
    var div = document.createElement("div")
    var editBtn = document.createElement("button")
    var deleteBtn = document.createElement("button")
    editBtn.innerHTML = "EDIT"
    editBtn.setAttribute("onclick", "editTodo(this)")
    deleteBtn.innerHTML = "DELETE"
    deleteBtn.setAttribute("onclick", "deleteTodo(this)")
    editBtn.className = "btn btn-info"
    deleteBtn.className = "btn btn-danger"
    div.appendChild(editBtn)
    div.appendChild(deleteBtn)
    liElement.appendChild(div)
    ulParent.appendChild(liElement)
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
  