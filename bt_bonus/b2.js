let diemToan = +prompt("Nhập điểm toán: ");
let diemVan = +prompt("Nhập điểm văn: ");
let diemAnh = +prompt("Nhập điểm anh: ");
let diemTb = (diemToan + diemVan + diemAnh) / 3;
if (isNaN(diemToan) || isNaN(diemVan) || isNaN(diemAnh)) {
  alert("Nhập điểm không hợp lệ!!");
} else {
  if (diemTb >= 9.0) {
    alert("xuất sắc");
  } else if (diemTb >= 7.0) {
    alert("Giỏi");
  } else if (diemTb >= 5.0) {
    alert("Khá");
  } else {
    alert("Kém");
  }
}
