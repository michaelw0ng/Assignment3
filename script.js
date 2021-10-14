let numRows = 0;
let numCols = 0;
let colorSelected; 

// Puts table element in variable
const table = document.getElementById("grid");

//Add a row
function addR() {
    let square = document.createElement("div");
    square.style.border = "1px solid black";
    square.style.height = "75px";
    square.style.width = "75px";
    square.style.margin = "5px 5px 5px 5px";
    table.appendChild(square);
}
//Add a column
function addC() {
    alert("Clicked Add Col")
}

//Remove a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
