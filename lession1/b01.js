let month = +prompt("Nhập tháng bất kỳ: ");
if (month < 0 || month > 12 || isNaN(month)) {
  console.log("Nhập tháng không hợp lệ");
}
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert(`Tháng ${month} có 31 ngày`);
    break;

  case 2:
    console.log(`Tháng ${month} có 28 hoặc 29 ngày năm nhuận`);
    break;

  case 4:
  case 6:
  case 9:
  case 11:
    alert(`Tháng ${month} có 30 ngày`);
    break;
}
