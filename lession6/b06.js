let a = +prompt("Nhập số a: ");
let b = +prompt("Nhập số b: ");
let c = +prompt("Nhập số c: ");
let x;
let x1;
let x2;
if (a == 0) {
  x = -c / b;
  alert(`x= ${x}`);
}
let delta = Math.pow(b, 2) - 4 * a * c;
if (delta < 0) {
  alert("Phương trình vô nghiệm");
} else if (delta == 0) {
  x1 = x2 = -b / (2 * a);
  alert(`Phương trình có nghiệm kép là: ${x1}`);
} else if (delta > 0) {
  x1 = (-b + Math.sqrt(delta)) / (2 * a);
  x2 = (-b - Math.sqrt(delta)) / (2 * a);
  alert(`Phương trình có nghiệm là x1= ${x1}, x2= ${x2}`);
}
