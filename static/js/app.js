// import data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select('tbody');

function buildTable(data) {
    // Clear out any existing data
    tbody.html("");

    // Loop through each object and append a row and cell for each value in the row
    data.forEach ((dataRow) => { 
        let row = tbody.append("tr");
        
        // Loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append('td');
            cell.text(val);
            }
        );
    });
}

function handleClick () {
    // Pull the datetime value from the filter
    let date = d3.select('#datetime').property('value');
    let filteredData = tableData;

    //check the if the date was entered and filter on the data using the date
    if (date) {
        //apply 'filter' to the table data to only keep the rows where the 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    //Rebuild the table using the filtered data,  if no date was entered then filteredData will be the original tableData
    buildTable(filteredData);
}

// Attach and event to listen for the form button
d3.selectAll('#filter-btn').on('click', handleClick);

// build the table when the page loads
buildTable(tableData);