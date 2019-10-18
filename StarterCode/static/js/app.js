// from data.js
var tableData = data;

// YOUR CODE HERE!
var resetbtn = d3.select("#reset-btn");

var tbody = d3.select("tbody");

console.log(tableData);
var populate = (tableData) => {
  tableData.forEach((datetime)=>{
      var row = tbody.append("tr");
      Object.entries(datetime).forEach(([key,value])=> {
         var cell=row.append("td");
          cell.text(value);
      });
  });
};

populate(tableData);

var button = d3.select("#filter-btn");

button.on("click",() => {

  d3.event.preventDefault();

  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value").trim();

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(filteredData);

  tbody.html("");

  let response = {
    filteredData
  }

  if (response.filteredData.length !== 0) {
    populate(filteredData);
  }
    else if (response.filteredData.length === 0){
     populate(filteredData);
  
    }
    else {
      tbody.append("tr").append("td").text("No results found!"); 
    }
})

resetbtn.on("click", () => {
  tbody.html("");
  populate(tableData);
  console.log("Table reset");





});