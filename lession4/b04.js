let number = +prompt("Nhập số nguyên bất kì: ");
if (isNaN(number)) {
  alert("Nhập số không hợp lệ");
} else {
  if (number % 3 === 0 && number % 5 === 0) {
    alert(`${number} chia hết cho cả 3 và 5`);
  } else {
    alert(`${number} không chia hết cho cả 3 và 5`);
  }
}
