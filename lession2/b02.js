let character = prompt("Nhập bất kỳ: ");

if (character.length > 0 && character.length < 2) {
  if (
    ("a" <= character && character <= "z") ||
    ("A" <= character && character <= "Z")
  ) {
    alert(`Ký tự ${character} là chữ cái`);
  }
} else {
  alert(`Đây không phải chữ cái`);
}
