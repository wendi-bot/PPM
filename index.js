/**
* {age} dalam tahun
* {height} dalam centimeter
*/
const getTariff = (age, height) => {
  return age < 1
    ? "Dilarang masuk"
    : age < 3
    ? 'Tarif Rp. ${30000 + (height > 70 ? 10000 : 0)}'
    : age < 7
    ? 'Tarif Rp. ${40000 + (height > 120 ? 15000 : 0)}'
    : age < 10
    ? 'Tarif Rp. ${50000 + (height > 150 ? 20000 : 0)}'
    : "Tarif Rp. 80000";
}

console.log(getTariff(8, 160))
