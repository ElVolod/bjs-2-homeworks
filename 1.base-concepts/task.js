"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  const d = b ** 2 - 4 * a * c;

  if (d === 0) {
    const root = -b / (2 * a);
    arr.push(root);
  }

  else if (d > 0) {
    const root1 = (-b + Math.sqrt(d)) / (2 * a);
    const root2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(root1, root2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);

  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }

  let S = amount - contribution;

  if (S <= 0) {
    return 0;
  }

  let P = percent / 100 / 12;

  if (P === 0) {
    return Number((S).toFixed(2));
  }

  let monthlyPayment = S * (P + (P / (((1 + P) ** countMonths) - 1)));

  let totalAmount = monthlyPayment * countMonths;

  return Number(totalAmount.toFixed(2));
}