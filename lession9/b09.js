let result;
result = "javascript" + 5;
alert(result);
// result = "javascript" + 5;
// Kết quả: "javascript5"
// Giải thích: Toán tử + giữa chuỗi và số thực hiện phép nối chuỗi, 5 được chuyển thành "5".

result = "javascript" - 1;
alert(result);
// result = "javascript" - 1;
// Kết quả: NaN
// Giải thích: Toán tử - yêu cầu số, "javascript" không chuyển thành số được, nên trả về NaN.

result = "3" + 2;
alert(result);
// result = "3" + 2;
// Kết quả: "32"
// Giải thích: Toán tử + giữa chuỗi và số thực hiện nối chuỗi, 2 được chuyển thành "2".

result = "5" - 4;
alert(result);
// result = "5" - 4;
// Kết quả: 1
// Giải thích: Toán tử - ép "5" thành số 5, rồi thực hiện 5 - 4 = 1.

result = isNaN("123");
alert(result);
// result = isNaN("123");
// Kết quả: false
// Giải thích: "123" có thể ép kiểu thành số 123, nên không phải NaN, trả về false.

result = isNaN("hello");
alert(result);
// result = isNaN("hello");
// Kết quả: true
// Giải thích: "hello" không thể ép kiểu thành số, trở thành NaN, nên trả về true.

result = Number.isNaN("123");
alert(result);
// result = Number.isNaN("123");
// Kết quả: false
// Giải thích: Number.isNaN không ép kiểu, "123" không phải NaN, nên trả về false.

result = Number.isNaN(NaN);
alert(result);
// result = Number.isNaN(NaN);
// Kết quả: true
// Giải thích: Number.isNaN kiểm tra giá trị là NaN, NaN chính là NaN, nên trả về true.
