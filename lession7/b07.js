let a = parseFloat(prompt("Nhập số thứ nhất:"));
let b = parseFloat(prompt("Nhập số thứ hai:"));
let c = parseFloat(prompt("Nhập số thứ ba:"));
if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert("Vui lòng nhập số hợp lệ!");
} else {
  let max = a > b ? (a > c ? a : c) : b > c ? b : c;

  alert("Số lớn nhất là: " + max);
}
