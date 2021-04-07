let $ = (id) => document.getElementById(id);

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = $("addForm");
let employees = $("employees");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = $("empCount");
let count = 0;

// ADD EMPLOYEE
form.addEventListener("submit", (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let id = $("id").value;
    let name = $("name").value;
    let extension = $("extension").value;
    let email = $("email").value;
    let department = $("department").value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let newRow = employees.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellId = newRow.insertCell();
    let cellName = newRow.insertCell();
    let cellExt = newRow.insertCell();
    let cellEmail = newRow.insertCell();
    let cellDepartment = newRow.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    // let idText = createTextNode(id)
    cellId.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(name));
    cellExt.appendChild(document.createTextNode(extension));
    cellEmail.appendChild(document.createTextNode(email));
    cellDepartment.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode("X"));
    let cellBtn = newRow.insertCell();
    cellBtn.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteEmployee);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    $("id").focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    empCount.innerHTML = `(${count})`;
});

// DELETE EMPLOYEE
function deleteEmployee(e) {
    if (e.target.classList.contains("delete")) {
        if (confirm("Are you sure you want to delete this employee?")) {
            employees.deleteRow(e.target.parentElement.parentElement.rowIndex);
            // DECREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
            count--;
            // IF 0 DISPLAY NOTHING
            empCount.innerHTML = count ? `(${count})` : "";
        }
    }
};