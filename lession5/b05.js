let string = prompt("Nhập chuỗi bất kì: ");
if (string < 0) {
  alert("Chuỗi Không hợp lệ");
} else {
  if (string.includes(" ")) {
    alert("Chuỗi có chứa dấu cách");
  } else {
    alert("Chuỗi không chứa dấu cách");
  }
}
