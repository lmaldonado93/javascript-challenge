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
  var inputElement2 = d3.select("#city");
  var inputElement3 = d3.select("#state");
  var inputElement4 = d3.select("#country");
  var inputElement5 = d3.select("#shape");

  var inputValue = inputElement.property("value").trim();
  var inputValue2 = inputElement2.property("value").trim();
  var inputValue3 = inputElement3.property("value").trim();
  var inputValue4 = inputElement4.property("value").trim();
  var inputValue5 = inputElement5.property("value").trim();

  console.log(inputValue);
  console.log(inputValue2);
  console.log(inputValue3);
  console.log(inputValue4);
  console.log(inputValue5);
  console.log(tableData);

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  var filteredData2 = tableData.filter(tableData => tableData.city === inputValue2);
  var filteredData3 = tableData.filter(tableData => tableData.state === inputValue3);
  var filteredData4 = tableData.filter(tableData => tableData.country === inputValue4);
  var filteredData5 = tableData.filter(tableData => tableData.shape === inputValue5);

  console.log(filteredData);
  console.log(filteredData2);
  console.log(filteredData3);
  console.log(filteredData4);
  console.log(filteredData5);


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
    let response2 = {
      filteredData2
    }
  
    if (response2.filteredData2.length !== 0) {
      populate(filteredData2);
    }
      else if (response2.filteredData2.length === 0){
       populate(filteredData2);
    
      }
      else {
        tbody.append("tr").append("td").text("No results found!"); 
      }
      let response3 = {
        filteredData3
      }
    
      if (response3.filteredData3.length !== 0) {
        populate(filteredData3);
      }
        else if (response3.filteredData3.length === 0){
         populate(filteredData3);
      
        }
        else {
          tbody.append("tr").append("td").text("No results found!"); 
        }
        let response4 = {
          filteredData4
        }
      
        if (response4.filteredData4.length !== 0) {
          populate(filteredData4);
        }
          else if (response4.filteredData4.length === 0){
           populate(filteredData4);
        
          }
          else {
            tbody.append("tr").append("td").text("No results found!"); 
          }
          let response5 = {
            filteredData5
          }
        
          if (response5.filteredData5.length !== 0) {
            populate(filteredData5);
          }
            else if (response5.filteredData5.length === 0){
             populate(filteredData5);
          
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