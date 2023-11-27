"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let D= Math.pow(b, 2) - 4 * a * c;
  console.log(D);
  if (D < 0) {
    return arr;
  }
  if (D===0){
    let y=-b/(2*a);
    arr.push(y);
  }
  if (D>0)
  {
    let z =(-b + Math.sqrt(D) )/(2*a);
    let x = (-b - Math.sqrt(D) )/(2*a);
    arr.push(z,x)
  }
  return arr;
}
console.log(solveEquation(1,5,4));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyInterestRate = percent / 100 / 12;
  const loanBody = amount - contribution;
  const monthlyPayment = loanBody * (monthlyInterestRate + (monthlyInterestRate / (Math.pow((1 + monthlyInterestRate), countMonths) - 1)));
  const totalPayment = monthlyPayment * countMonths;
  const roundedTotalPayment = Math.round(totalPayment * 100) / 100;
  return roundedTotalPayment;
}