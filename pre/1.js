// 1.
/**
 * 
 * 1번째 루프: 수입 배열의 요소를 순회 하면서 부가세율을 적용하여 vats 배열을 만듭니다.
 * 
 * 2번쨰 루프: 수입 배열의 요소를 순회 하면서 총 수입을 구합니다.
 */


// let incomes = [1000, 2000, 3000, 4000];

// let vats = [];
// for (i = 0; i < incomes.length; i++) {
//   // 부가세 계산
//   vats[i] = incomes[i] / 11;
// }

// let price = 0;
// for (let i in incomes) {
//   price += incomes[i];
// }

let incomes = [1000, 2000, 3000, 4000];

// 수입 배열을 부가세 배열로 변환하여 새로 반환 하는것 이므로, map함수를 사용합니다.
const vats = incomes.map(income => income / 11);

// 수입 배열의 요소를 누적하면서 더하므로, reduce메서드를 사용합니다.
const price = incomes.reduce((price, income) => price + income, 0)
