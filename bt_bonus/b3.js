let cash = +prompt("Nhập số dư của bạn: ");
if (isNaN(cash) || cash < 0) {
  alert("Nhập thông tin không hợp lệ");
} else {
  let type = prompt("Nhập (nap) hoặc (rut):");
  switch (type) {
    case "nap":
      let nap = +prompt("Nhập số tiền muốn nạp");
      if (nap < 0 || isNaN(nap)) {
        alert("Nhập số tiền không hợp lệ");
      } else {
        cash = cash + nap;
      }
      break;
    case "rut":
      let rut = +prompt("Nhập số tiền muốn rút:");
      if (rut > cash || rut < 0 || isNaN(rut)) {
        alert("Số tiền rút không hợp lệ");
      } else {
        cash = cash - rut;
      }
      break;
    default:
      alert("Nhập không hợp lệ");
      break;
  }
  alert(`Số dư còn lại là ${cash} VND`);
}
