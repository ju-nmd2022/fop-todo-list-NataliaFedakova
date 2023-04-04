let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputContainer');


addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = ""; //clears the input
    saveData();

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
    saveData();
    });

    buttonDone.addEventListener("click", function doneElement(){
      paragraph.style.textDecoration = "line-through";
      const element = this.parentNode;
      toDoContainer.removeChild(buttonDone);
      saveData();
      });

    paragraph.appendChild(button);
    paragraph.appendChild(buttonDone);

    toDoContainer.appendChild(paragraph);
    saveData();
 })

 function saveData(){
  localStorage.setItem("data", toDoContainer.innerHTML);
 }
   
 function showTask(){
  toDoContainer.innerHTML = localStorage.getItem("data");
 }

 showTask();
 
