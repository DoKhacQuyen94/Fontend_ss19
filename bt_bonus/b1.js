let month = parseInt(prompt("Nhập tháng (1-12):"));
let year = parseInt(prompt("Nhập năm (ví dụ: 2023):"));

if (isNaN(month) || isNaN(year) || month < 1 || month > 12 || year < 1) {
  alert("Vui lòng nhập tháng (1-12) và năm hợp lệ!");
} else {
  let days;
  if (month === 4 || month === 6 || month === 9 || month === 11) {
    days = 30;
  } else if (month === 2) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      days = 29;
    } else {
      days = 28;
    }
  } else {
    days = 31;
  }

  alert(`Tháng ${month} năm ${year} có ${days} ngày`);
}
