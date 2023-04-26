const textbox = document.getElementById("text-box");
const listcontainer = document.getElementById("list-container");
function addTask(){
    if(textbox.value === ''){
        alert("You must write anything")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = textbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    textbox.value = ""; 
    saveDate();

}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveDate();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveDate();
    }
}, false);

function saveDate(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();

