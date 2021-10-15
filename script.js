let numRows = 0;
let numCols = 0;
let colorSelected;

// Puts table element in variable
const table = document.getElementById("grid");

//Add a row
function addR() {
    // Set initial table length to height or width of window, whichever is lower
    let initial_length = window.innerHeight;
    if (window.innerWidth < initial_length) {
        initial_length = window.innerWidth;
    }
    // Table length is shortened due to title and buttons
    initial_length -= 125;

    let squares = document.getElementsByClassName("square");
    let square_exists = squares.length ? true : false;

    // Creates row div
    let row = document.createElement("div");
    row.className = "row";
    table.appendChild(row);

    row.style.display = "flex";
    row.style.justifyContent = "flex-start";

    if (square_exists) {
        for (let i = 0; i < numCols; i++) {
            let square = document.createElement("div");
            square.className = "square";
            square.onclick = function onClick() {
                this.style.backgroundColor = colorSelected;
            };
            square.style.border = "1px solid black";
            square.style.margin = "5px 5px 5px 5px";

            row.appendChild(square);
        }
        numRows++;

        let largest_side = numCols;
        if (numRows > numCols) {
            largest_side = numRows;
        }

        margin = 5 / largest_side;

        let square_width = (initial_length - 3 * (largest_side + 1)) / largest_side;
        square_width = Math.round(square_width);

        let set_length = "";

        for (let i = 0; i < squares.length; i++) {
            let square_to_edit = squares[i];
            if (i === 0) {
                square_to_edit.style.width = `${square_width}px`;
                square_to_edit.style.height = `${square_to_edit.clientWidth}px`;
                set_length = `${square_to_edit.clientWidth}px`;
                square_to_edit.style.width = set_length;
                square_to_edit.style.height = set_length;

            }
            else {
                square_to_edit.style.width = set_length;
                square_to_edit.style.height = set_length;
            }
            square_to_edit.style.margin = `${margin}px ${margin}px ${margin}px ${margin}px`;
        }
    }
    else {
        // Creates first square 
        let square = document.createElement("div");
        square.className = "square";
        square.style.border = "1px solid black";
        square.style.width = `${initial_length}px`;
        square.onclick = function onClick() {
            this.style.backgroundColor = colorSelected;
        };
        square.style.margin = "5px 5px 5px 5px";
        let actual_square = row.appendChild(square);

        // Set height to width of square
        actual_square.style.height = `${actual_square.clientWidth}px`;

        // Set # of rows and # of columns
        numRows++;
        numCols++;
    }
}

//Add a column
function addC() {
    // Set initial table length to height or width of window, whichever is lower
    let initial_length = window.innerHeight;
    if (window.innerWidth < initial_length) {
        initial_length = window.innerWidth;
    }
    // Table length is shortened due to title and buttons
    initial_length -= 125;

    let squares = document.getElementsByClassName("square");
    let square_exists = squares.length ? true : false;

    let rows = document.getElementsByClassName("row");

    if (square_exists) {
        for (let i = 0; i < numRows; i++) {
            let row = rows[i];
            let square = document.createElement("div");
            square.className = "square";
            square.onclick = function onClick() {
                this.style.backgroundColor = colorSelected;
            };
            square.style.border = "1px solid black";
            square.style.margin = "5px 5px 5px 5px";

            row.appendChild(square);
        }
        numCols++;

        let largest_side = numCols;
        if (numRows > numCols) {
            largest_side = numRows;
        }
        let margin = 5 / largest_side;

        let square_width = (initial_length - 3 * (largest_side + 1)) / largest_side;
        square_width = Math.round(square_width);


        let set_length = "";

        for (let i = 0; i < squares.length; i++) {
            let square_to_edit = squares[i];
            if (i === 0) {
                square_to_edit.style.width = `${square_width}px`;
                square_to_edit.style.height = `${square_to_edit.clientWidth}px`;
                set_length = `${square_to_edit.clientWidth}px`;
                square_to_edit.style.width = set_length;
                square_to_edit.style.height = set_length;
            }
            else {
                square_to_edit.style.width = set_length;
                square_to_edit.style.height = set_length;
            }
            square_to_edit.style.margin = `${margin}px ${margin}px ${margin}px ${margin}px`;
        }

    }
    else {
        let row = document.createElement("div");
        row.className = "row";

        row.style.display = "flex";
        row.style.justifyContent = "flex-start";

        table.appendChild(row);
        // Creates first square 
        let square = document.createElement("div");
        square.className = "square";
        square.onclick = function onClick() {
            this.style.backgroundColor = colorSelected;
        };
        square.style.border = "1px solid black";
        square.style.width = `${initial_length}px`;
        square.style.margin = "5px 5px 5px 5px";
        let actual_square = row.appendChild(square);

        // Set height to width of square
        actual_square.style.height = `${actual_square.clientWidth}px`;

        // Set # of rows and # of columns
        numCols++;
        numRows++;
    }
}

//Remove a row
function removeR() {
    // Set initial table length to height or width of window, whichever is lower
    let initial_length = window.innerHeight;
    if (window.innerWidth < initial_length) {
        initial_length = window.innerWidth;
    }
    // Table length is shortened due to title and buttons
    initial_length -= 125;

    let squares = document.getElementsByClassName("square");
    let square_exists = squares.length ? true : false;

    if (square_exists) {
        // Get all row div elements
        let rows = document.getElementsByClassName("row");
        // Get the last row
        let row = rows[rows.length - 1];
        row.remove();
        numRows--;
        // When there are no squares left, reset # of rows and columns
        if (numRows === 0) {
            numCols = 0;
        }
        let largest_side = numCols;
        if (numRows > numCols) {
            largest_side = numRows;
        }

        margin = 5 / largest_side;

        let square_width = (initial_length - 3 * (largest_side + 1)) / largest_side;
        square_width = Math.round(square_width);

        let set_length = "";

        for (let i = 0; i < squares.length; i++) {
            let square_to_edit = squares[i];
            if (i === 0) {
                square_to_edit.style.width = `${square_width}px`;
                square_to_edit.style.height = `${square_to_edit.clientWidth}px`;
                set_length = `${square_to_edit.clientWidth}px`;
                square_to_edit.style.width = set_length;
                square_to_edit.style.height = set_length;

            }
            else {
                square_to_edit.style.width = set_length;
                square_to_edit.style.height = set_length;
            }
            square_to_edit.style.margin = `${margin}px ${margin}px ${margin}px ${margin}px`;
        }
    }
}
//Remove a column
function removeC() {
    // Set initial table length to height or width of window, whichever is lower
    let initial_length = window.innerHeight;
    if (window.innerWidth < initial_length) {
        initial_length = window.innerWidth;
    }
    // Table length is shortened due to title and buttons
    initial_length -= 125;

    let squares = document.getElementsByClassName("square");
    let square_exists = squares.length ? true : false;

    if (square_exists) {
        // Get all row div elements
        let rows = document.getElementsByClassName("row");
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i]
            let row_squares = row.getElementsByClassName("square");
            let last_square_in_row = row_squares[row_squares.length - 1];
            last_square_in_row.remove();
        }
        numCols--;

        // rows.length changes as rows are removed, so we need to initialize initial row length
        let initial_row_length = rows.length;

        // When there are no squares left, reset # of rows and columns
        if (numCols === 0) {
            for (let i = 0; i < initial_row_length; i++) {
                // 0 index because rows' indices are dynamically deleted, so indices change
                let row = rows[0];
                row.remove();
                console.log(rows);
            }
            numRows = 0;
        }
        let largest_side = numCols;
        if (numRows > numCols) {
            largest_side = numRows;
        }

        margin = 5 / largest_side;

        let square_width = (initial_length - 3 * (largest_side + 1)) / largest_side;
        square_width = Math.round(square_width);

        let set_length = "";

        for (let i = 0; i < squares.length; i++) {
            let square_to_edit = squares[i];
            if (i === 0) {
                square_to_edit.style.width = `${square_width}px`;
                square_to_edit.style.height = `${square_to_edit.clientWidth}px`;
                set_length = `${square_to_edit.clientWidth}px`;
                square_to_edit.style.width = set_length;
                square_to_edit.style.height = set_length;

            }
            else {
                square_to_edit.style.width = set_length;
                square_to_edit.style.height = set_length;
            }
            square_to_edit.style.margin = `${margin}px ${margin}px ${margin}px ${margin}px`;

        }
    }
}
//sets global var for selected color
function selected() {
    colorSelected = document.getElementById("selectedID").value;
}

function fill() {
    let squares = document.getElementsByClassName("square");
    for (let i = 0; i < squares.length; i++) {
        let square = squares[i];
        square.style.backgroundColor = colorSelected;
    }
}

function clearAll() {
    let squares = document.getElementsByClassName("square");
    for (let i = 0; i < squares.length; i++) {
        let square = squares[i];
        square.style.backgroundColor = "white";
    }
}

function fillU() {
    let squares = document.getElementsByClassName("square");
    for (let i = 0; i < squares.length; i++) {
        let square = squares[i];
        if (square.style.backgroundColor === "white" || square.style.backgroundColor === "") {
            square.style.backgroundColor = colorSelected;
        }
    }
}
