let sales = [10, 12, 13, 14, 15];
let totalSales = 0;
sales.forEach((sale, i) => {
  console.log(`Sales of ${i + 1} = ${sale}`);
  totalSales += sale;
});
console.log(`Total Sales = ${totalSales}`);
