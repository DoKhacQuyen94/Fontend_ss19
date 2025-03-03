let type = prompt(`Nhập (VND) hoặc (USD): `);
let cash;
if (type === "VND") {
  cash = +prompt("Nhập số tiền VND:  ");
  alert(`${!isNaN(cash)}`);
  if (cash >= 0 && !isNaN(cash)) {
    alert(`${cash / 23000} USD`);
  } else {
    alert("Nhập thông tin không hợp lệ");
  }
} else {
  cash = +prompt("Nhập số tiền USD:  ");
  if (cash >= 0 && !isNaN(cash)) {
    alert(`${cash * 23000} VND`);
  } else {
    alert("Nhập thông tin không hợp lệ");
  }
}
