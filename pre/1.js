// 1.
let incomes = [1000, 2000, 3000, 4000];

let vats = [];
for (i = 0; i < incomes.length; i++) {
  // 부가세 계산
  vats[i] = incomes[i] / 11;
}

let price = 0;
for (let i in incomes) {
  price += incomes[i];
}