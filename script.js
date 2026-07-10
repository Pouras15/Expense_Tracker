const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const total = document.getElementById("total");

let totalAmount = 0;

addBtn.addEventListener("click", function() {
    const name = expenseName.value;
    
    const amount = Number(expenseAmount.value); 

    
    if (name.trim() === "" || isNaN(amount) || amount <= 0) {
         alert("Please Enter Valid Details");
         return;
    }

    const li = document.createElement("li");
    li.textContent = `${name} - ₹${amount}`;
    expenseList.appendChild(li);

    
    totalAmount += amount;

    total.textContent = `Total : ₹${totalAmount}`;

  
    expenseName.value = "";
    expenseAmount.value = "";
}); 


