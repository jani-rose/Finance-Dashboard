let transactions =JSON.parse(localStorage.getItem("transactions"))||[

{
date: "2026-04-01",
amount: 5000,
category: "Salary",
type: "income"
},

{
date: "2026-04-02",
amount: 1200,
category: "Food",
type: "expense"
},

{
date: "2026-04-03",
amount: 800,
category: "Transport",
type: "expense"
},

{
date: "2026-04-05",
amount: 2500,
category: "Freelance",
type: "income"
}

];