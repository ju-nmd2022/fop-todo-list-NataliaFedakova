let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputContainer');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = ""; //clears the input
    })

  const spanElement = document.createElement("span");
  spanElement.innerText = this.innerText;
  toDoContainer.appendChild(spanElement);
  
  const button = document.createElement("button");
  button.innerText = "Done";
  button.onClick = removeElement;
  toDoContainer.appendChild(button);

  function removeElement(){
    const element = this.parentNode;
    const paragraph = element.querySelector("span");
    element.parentNode.removeChild(element);
  }