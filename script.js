// ================= SUMMARY =================

function calculateSummary() {
 let income = 0;
 let expenses = 0;
 transactions.forEach(t => {
 if(t.type === "income")
 income += t.amount;
 else
 expenses += t.amount;
 });

 let balance = income - expenses;
 document.getElementById("totalIncome").textContent ="₹" + income;
 document.getElementById("totalExpenses").textContent = "₹" + expenses;
 document.getElementById("totalBalance").textContent = "₹" + balance;
}

calculateSummary();

// ================= TABLE =================

function displayTransactions(data) {
 let tableBody = document.getElementById("tableBody");
 tableBody.innerHTML = "";
 data.forEach(t => {
 let row = `
 <tr>
 <td>${t.date}</td>
 <td>₹${t.amount}</td>
 <td>${t.category}</td>
 <td>${t.type}</td>
 </tr>
 `;

 tableBody.innerHTML += row;
 });
}

displayTransactions(transactions);

// ================= SEARCH =================

function filterTransactions() {
 let search = document.getElementById("searchInput").value.toLowerCase();
 let type = document.getElementById("filterType").value;
 let filtered = transactions.filter(t => {
 let matchSearch = t.category.toLowerCase().includes(search);
 let matchType = type === "all"|| t.type === type;
 return matchSearch && matchType;
 });

 displayTransactions(filtered);

}
document.getElementById("searchInput").addEventListener("input", filterTransactions);
document.getElementById("filterType").addEventListener("change", filterTransactions);

// ================= INSIGHTS =================

function showInsights() {
 let categoryTotals = {};
 let monthlyTotals = {};
 transactions.forEach(t => {
 if(t.type === "expense") {
 if(!categoryTotals[t.category])
 categoryTotals[t.category] = 0;
 categoryTotals[t.category] += t.amount;
 }

 let month = t.date.substring(0,7)
 if(!monthlyTotals[month])
 monthlyTotals[month] = 0;
 if(t.type === "expense")
 monthlyTotals[month] += t.amount;
 });

 let highestCategory = "";
 let highestAmount = 0;

 for(let c in categoryTotals) {
 if(categoryTotals[c] > highestAmount) {
 highestAmount = categoryTotals[c];
 highestCategory = c;
 }
 }

 let months =
 Object.keys(monthlyTotals);
 months.sort();
 let comparisonText = "";
 if(months.length >= 2) {
 let last = monthlyTotals[months[months.length-1]];
 let prev = monthlyTotals[ months[months.length-2]];
 let diff = last - prev;
 if(diff > 0)
 comparisonText =`Expenses increased by ₹${diff}`;
 else
 comparisonText = `Expenses decreased by ₹${Math.abs(diff)}`;
 }

 document.getElementById("insights").innerHTML = `Highest Spending:${highestCategory} ₹${highestAmount}<br><br>${comparisonText}`;
}

showInsights();

// ================= ROLE =================

document.getElementById("roleSelect").addEventListener("change", function(){
 let role = this.value;
 let btn = document.getElementById("addBtn");
 if(role === "viewer")
 btn.style.display = "none";
 else
 btn.style.display = "inline-block";
});
document.getElementById("addBtn").style.display = "none";

// ================= FORM =================

document.getElementById("addBtn").addEventListener("click", function(){
 let form = document.getElementById("formContainer");
 form.style.display = form.style.display === "block"? "none" : "block";
});
document.getElementById("saveBtn").addEventListener("click", function(){
 let date = document.getElementById("dateInput").value;
 let amount = parseInt(document.getElementById("amountInput").value);
 let category =document.getElementById("categoryInput").value;
 let type = document.getElementById("typeInput").value;
 let newTransaction = {
 date,
 amount,
 category,
 type
 };

 transactions.push(newTransaction);
 localStorage.setItem("transactions",JSON.stringify(transactions));

 displayTransactions(transactions);
 calculateSummary();
 showInsights();
});


// ================= CHARTS =================

createLineChart();
createPieChart();


// ================= DARK MODE =================

const toggleBtn =document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "dark") {document.body.classList.add("dark");
 toggleBtn.textContent = "☀️ Light Mode";
}

toggleBtn.addEventListener("click", () => {
 document.body.classList.toggle("dark");
 let dark = document.body.classList.contains("dark");
 if(dark) {
 localStorage.setItem("theme","dark");
 toggleBtn.textContent = "☀️ Light Mode";
 } else {
 localStorage.setItem("theme","light");
 toggleBtn.textContent ="🌙 Dark Mode";
 }
});