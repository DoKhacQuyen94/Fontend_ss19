let month = +prompt("Nhập tháng bất kì");
if (month < 0 || month > 12) {
  alert("Tháng không hợp lệ");
} else {
  if (month <= 3) {
    alert("Mùa xuân");
  } else if (month <= 6) {
    alert("Mùa hè");
  } else if (month <= 9) {
    alert("Mùa thu");
  } else {
    alert("Mùa đông");
  }
}
