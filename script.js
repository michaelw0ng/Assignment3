let numRows = 0;
let numCols = 0;
let colorSelected;

// Puts table element in variable
const table = document.getElementById("grid");

// Set table width and height to 100%
table.style.width = "100%";
table.style.height = "100%";
// table.style.float = "left";

//Add a row
function addR() {
    let squares = document.getElementsByClassName("square");
    let square_exists = squares.length ? true : false;

    // Creates row div
    let row = document.createElement("div");
    row.className = "row";
    table.appendChild(row);

    if (square_exists)
    {

        for (let i = 0; i < numCols; i++)
        {
            let square = document.createElement("div");
            square.className = "square";
            square.style.border = "1px solid black";
            square.style.margin = "5px 5px 5px 5px";

            row.appendChild(square);
            numRows++;
        }

        let square_width = 100 / (numCols * numRows);

        for (let i = 0; i < squares.length; i++)
        {
            let square_to_edit = squares[i];
            square_to_edit.style.width = `${square_width}%`;
            square_to_edit.style.height = `${square_to_edit.clientWidth}px`;
        }
    }
    else 
    {
        // Creates first square 
        let square = document.createElement("div");
        square.className = "square";
        square.style.border = "1px solid black";
        square.style.width = `100%`;
        square.style.margin = "5px 5px 5px 5px";
        let actual_square = row.appendChild(square);

        // Set height to width of square
        actual_square.style.height = `${actual_square.clientWidth}px`;

        // Set # of rows and # of columns
        numRows++;
        numCols++;
        
        /*
        // Sets length of square based on how many squares there are
        let square_num = squares.length;
        let square_length = 100 / (square_num + 1);
        console.log(square_length);

        // Creates first square 
        let square = document.createElement("div");
        square.style.border = "1px solid black";
        square.style.height = `${square_length}%`;
        square.style.width = `${square_length}%`;
        square.style.margin = "5px 5px 5px 5px";
        table.appendChild(square);*/
    }

    /*
    // Checks if squares exist on div
    if (div_exists) {
        let rows = document.getElementsByClassName("row");
        console.log(rows.length);
        for (let i = 0; i < rows.length; i++) {
            // rows[i].style.float = "left";

            // Create div for column and add to board
            // let column = document.createElement("div");
            // column.className = "column";
            // table.appendChild(column);

            // Create square and add to board
            let square = document.createElement("div");
            square.className = "square";
            square.style.border = "1px solid black";
            square.style.margin = "5px 2.5px 5px 2.5px";
            rows[i].appendChild(square);

            // Sets length of square based on how many squares there are
            let squares = document.getElementsByClassName("square");
            let square_num = squares.length;
            let square_length = 100 / (square_num);
            console.log(square_length);
            squares.forEach((sq) => {
                sq.style.height = `${square_length}%`;
                sq.style.width = `${square_length}%`;
            });
        }
    }
    else {
        // Sets length of square based on how many squares there are
        let square_num = div.length;
        let square_length = 100 / (square_num + 1);
        console.log(square_length);

        // Creates first square 
        let square = document.createElement("div");
        square.style.border = "1px solid black";
        square.style.height = `${square_length}%`;
        square.style.width = `${square_length}%`;
        square.style.margin = "5px 5px 5px 5px";
        table.appendChild(square);
    }
*/
}

//Add a column
function addC() {
    let squares = document.getElementsByClassName("square");
    let square_exists = squares.length ? true : false;

    if (square_exists)
    {
        for (let i = 0; i < numRows; i++)
        {
            let square = document.createElement("div");
            square.className = "square";
            square.style.border = "1px solid black";
            square.style.margin = "5px 5px 5px 5px";

            console.log("hello");

            table.appendChild(square);
            numCols++;
        }

        let square_width = 100 / (numCols * numRows);

        for (let i = 0; i < squares.length; i++)
        {
            let square_to_edit = squares[i];
            square_to_edit.style.width = `${square_width}%`;
            square_to_edit.style.height = `${square_to_edit.clientWidth}px`;
        }

    }
    else 
    {
        // Creates first square 
        let square = document.createElement("div");
        square.className = "square";
        square.style.border = "1px solid black";
        square.style.width = `100%`;
        square.style.margin = "5px 5px 5px 5px";
        let actual_square = table.appendChild(square);

        // Set height to width of square
        actual_square.style.height = `${actual_square.clientWidth}px`;

        // Set # of rows and # of columns
        numCols++;
        numRows++;

    }
    /*
    // Checks if there are squares in grid
    let div = document.getElementsByClassName("square");
    let div_exists = div.length ? true : false;

    if (div_exists) {
        // Creates row divs on the grid
        let row = document.createElement("div");
        row.className = "row";
        // row.style.float = "left";
        // row.style.boxSizing = "border-box";
        table.appendChild(row);
    }
    else {
        // Creates a square div on the grid
        let square = document.createElement("div");
        square.className = "square"
        square.style.border = "1px solid black";
        square.style.margin = "5px 2.5px 5px 2.5px";
        table.appendChild(square);
    }

    // Sets length of square based on how many squares there are
    let square_num = div.length;
    let square_length = 100 / (square_num);
    squares.forEach((sq) => {
        sq.style.height = `${square_length}%`;
        sq.style.width = `${square_length}%`;
    });
    */
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
function selected() {
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill() {
    alert("Clicked Fill All")
}

function clearAll() {
    alert("Clicked Clear All")
}

function fillU() {
    alert("Clicked Fill All Uncolored")
}
