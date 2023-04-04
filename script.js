let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputContainer');


addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = ""; //clears the input

    const button = document.createElement("button");
    button.style = "background-color: #ffffff;";
    button.innerText = "🗑️";

    const buttonDone = document.createElement("button");
    buttonDone.style = "background-color: #ffffff;";
    buttonDone.innerText = "✔";

    button.addEventListener("click", function removeElement(){
    const element = this.parentNode;
    toDoContainer.removeChild(paragraph);
    toDoContainer.removeChild(button);
    });

    buttonDone.addEventListener("click", function doneElement(){
      paragraph.style.textDecoration = "line-through";
      const element = this.parentNode;
      toDoContainer.removeChild(buttonDone);
      });

    paragraph.appendChild(button);
    paragraph.appendChild(buttonDone);

    toDoContainer.appendChild(paragraph);
 })
   
  
