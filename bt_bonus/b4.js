let cash = parseFloat(prompt("Nhập số tiền thanh toán (VND):"));

if (isNaN(cash) || cash < 0) {
  alert("Vui lòng nhập số tiền hợp lệ (số không âm)!");
} else {
  let tyLeThue;
  let tax;
  let tongTien;

  if (cash < 500000) {
    tyLeThue = 0.05;
  } else if (cash <= 1000000) {
    tyLeThue = 0.1;
  } else {
    tyLeThue = 0.15;
  }
  tax = cash * tyLeThue;
  tongTien = cash + tax;

  alert(
    `Số tiền thanh toán: ${cash.toLocaleString()} VND\n` +
      `Thuế (${taxRate * 100}%): ${tax.toLocaleString()} VND\n` +
      `Tổng giá trị hóa đơn: ${tongTien.toLocaleString()} VND`
  );
}
