/**
 * Inputs:
 * + 5 số thực (mỗi số một ô)

 * Function
 *      B1: lấy dữ liệu từ form
 *      B2: tính toán
 *          result = (number1 + number2 + number3 + number4 + number5)/5;
 *      B3: thông báo kết quả 
 * 
 * Outputs:
 * result
 */
let bai2 = function(){

    let number1 = Number(document.getElementById('bai2-1').value);
    let number2 = Number(document.getElementById('bai2-2').value);
    let number3 = Number(document.getElementById('bai2-3').value);
    let number4 = Number(document.getElementById('bai2-4').value);
    let number5 = Number(document.getElementById('bai2-5').value);

    kq = (number1 + number2 + number3 + number4 + number5)/5;

    document.getElementById('txtbai2').innerHTML = kq;
}