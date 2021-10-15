// # of rows in table
let numRows = 0;
// # of columns in table
let numCols = 0;
// Color selected by drop down menu
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

    // If squares exist, set to true, else set to false
    let squares = document.getElementsByClassName("square");
    let square_exists = squares.length ? true : false;

    // Creates row div
    let row = document.createElement("div");
    row.className = "row";
    table.appendChild(row);

    // Squares are rendered from left to right
    row.style.display = "flex";
    row.style.justifyContent = "flex-start";

    // If squares exist on table
    if (square_exists) {
        // For each column, add a square
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

        // Gets largest side for responsive design
        let largest_side = numCols;
        if (numRows > numCols) {
            largest_side = numRows;
        }

        // Margin size between squares depends on the largest side of table
        margin = 5 / largest_side;

        // Calculates square length based on window size and margin lengths
        let square_width = (initial_length - 3 * (largest_side + 1)) / largest_side;
        square_width = Math.round(square_width);

        let set_length = "";

        // Sets each square to the same length and margin
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

        // Increments # of rows and # of columns
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

    // If squares exist, set to true, else set to false
    let squares = document.getElementsByClassName("square");
    let square_exists = squares.length ? true : false;

    // Row elements are placed into rows variable
    let rows = document.getElementsByClassName("row");

    // If squares exist on table
    if (square_exists) {
        // Create a square for each row there is
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

        // Gets largest side for responsive design
        let largest_side = numCols;
        if (numRows > numCols) {
            largest_side = numRows;
        }

        // Margin size between squares depends on the largest side of table
        margin = 5 / largest_side;

        // Calculates square length based on window size and margin lengths
        let square_width = (initial_length - 3 * (largest_side + 1)) / largest_side;
        square_width = Math.round(square_width);

        // Set length will be the length obtained from the width 
        let set_length = "";

        // Sets each square to the same length and margin
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
        // Creates a row
        let row = document.createElement("div");
        row.className = "row";

        // Renders squares left to right
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

    // Sets variable to true if there are squares, else set to false
    let squares = document.getElementsByClassName("square");
    let square_exists = squares.length ? true : false;

    // If squares exist on the table
    if (square_exists) {
        // Get all row div elements
        let rows = document.getElementsByClassName("row");
        // Get the last row and remove it
        let row = rows[rows.length - 1];
        row.remove();
        numRows--;
        // When there are no squares left, reset # of rows and columns
        if (numRows === 0) {
            numCols = 0;
        }

        // Largest side is the longer side of the squares inside table
        let largest_side = numCols;
        if (numRows > numCols) {
            largest_side = numRows;
        }

        // Margin is the size responsive to largest side
        margin = 5 / largest_side;

        // Responsive square length based on window size and imaginary margins
        let square_width = (initial_length - 3 * (largest_side + 1)) / largest_side;
        square_width = Math.round(square_width);

        // Set length will be the length obtained from the chosen width
        let set_length = "";

        // Sets all squares to the same width, height, and margin
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

    // Sets variable to true if squares exist on board, else sets to false
    let squares = document.getElementsByClassName("square");
    let square_exists = squares.length ? true : false;

    // If squares exists on table
    if (square_exists) {
        // Get all row div elements
        let rows = document.getElementsByClassName("row");
        // In each row, remove the last square element
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

        // Puts largest side (columns or rows) into variable
        let largest_side = numCols;
        if (numRows > numCols) {
            largest_side = numRows;
        }

        // Margin size responsive to largest side
        margin = 5 / largest_side;

        // Square length that is responsive to window size and some measure of margin
        let square_width = (initial_length - 3 * (largest_side + 1)) / largest_side;
        square_width = Math.round(square_width);

        // Used to define a square length to be used for the other squares
        let set_length = "";

        // Sets all squares to the same length and margin
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

// Fills all squares with selected color
function fill() {
    let squares = document.getElementsByClassName("square");
    for (let i = 0; i < squares.length; i++) {
        let square = squares[i];
        square.style.backgroundColor = colorSelected;
    }
}

// Clears all squares to initial or original color
function clearAll() {
    let squares = document.getElementsByClassName("square");
    for (let i = 0; i < squares.length; i++) {
        let square = squares[i];
        square.style.backgroundColor = "white";
    }
}

// Fills all uncolored squares to selected color
function fillU() {
    let squares = document.getElementsByClassName("square");
    for (let i = 0; i < squares.length; i++) {
        let square = squares[i];
        if (square.style.backgroundColor === "white" || square.style.backgroundColor === "") {
            square.style.backgroundColor = colorSelected;
        }
    }
}
