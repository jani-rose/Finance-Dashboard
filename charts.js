function createLineChart() {
 new Chart(document.getElementById("lineChart"),
 {
 type: "line",
 data: {
 labels:
 ["Jan","Feb","Mar","Apr"],
 datasets: [{
 label: "Balance",
 data:
 [4000,5200,4800,6100]
 }]
 }
 });
}

function createPieChart() {
 new Chart(document.getElementById("pieChart"),
 {
 type: "pie",
 data: {
 labels:
 ["Food","Transport","Shopping"],
 datasets: [{
 data:
 [1200,800,500]
 }]
 }
 });
}