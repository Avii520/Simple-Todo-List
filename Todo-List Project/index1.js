let store = [];

function addFunc(){
    let textInput = document.getElementById("text");
    let text = textInput.value;

    if(text === ""){
        return;
    }

    store.push(text);
    textInput.value = "";
    saveTask();
    displayTask();
}

function saveTask(){
    localStorage.setItem("tasks", JSON.stringify(store));
}

function displayTask(){
    let txt = "";

    for(let i = 0; i < store.length; i++){
        txt += "<li>" + store[i] +
               " <button id = 'dltbtn' onclick='removestore(" + i + ")'>Delete</button></li>";
    }

    document.getElementById("List").innerHTML = txt;
}

function removestore(i){
    store.splice(i, 1);
    saveTask();
    displayTask();
}

function Clear_All(){
    store = [];
    localStorage.removeItem("tasks");
    displayTask();
}
