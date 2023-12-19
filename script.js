function submitForm() {
    // Get form values
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const genderElement = document.querySelector('input[name="gender"]:checked');
    const gender = genderElement ? genderElement.value : ""; // Check if gender is selected
    const foodOptions = document.getElementById("food");
    const selectedFoods = [...foodOptions.selectedOptions].map(option => option.value);
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    // Validate that at least 2 food options are selected
    if (selectedFoods.length < 2) {
        alert("Please select at least 2 food options");
        return;
    }

    // Create a new row in the table
    const table = document.getElementById("dataTable");
    const newRow = table.insertRow(table.rows.length);
    
    // Add cells to the row
    const cells = [
        firstName, lastName, address, pincode, gender,
        selectedFoods.join(", "), state, country
    ];

    cells.forEach((cellData, index) => {
        const cell = newRow.insertCell(index);
        cell.textContent = cellData;
    });

    // Clear form fields
    document.getElementById("form").reset();
}