function calculateTax(income, expenses) {
    if(income, expenses < 0  || income < expenses){
        return  "Invalid Input";
    }
  const remainingMoney = income - expenses;
  const taxAmount = remainingMoney * 0.20;
  return taxAmount;
}

const total = calculateTax(6000, 8500);
console.log(total);
