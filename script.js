const inputData = document.getElementById("input-data");
const ul = document.getElementById("taskinput-data");
const btn = document.getElementById("btn");
function addTask(){
    if(inputData.value == ""){
      alert("Please enter some data");
      saveData();
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputData.value;
        ul.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    inputData.value = "";
}

function saveData(){
    localStorage.setItem("data",ul.innerHTML);
}
function showData(){
    ul.innerHTML = localStorage.getItem("data");
}
btn.addEventListener("click",addTask);
ul.addEventListener("click",function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
   e.target.parentElement.remove();
   saveData();
  }
},false);
showData();