
/**
 * Inputs:
 * + số ngày đi làm (iluong1ngay)
 * + số tiền mỗi ngày nhận được (isongaydilam)
 * 
 * step ()
 * Function
 *      B1: lấy dữ liệu từ form
 *      B2: tính tiền lương
 *          kq = iluong1ngay * isongaydilam
 *      B3: thông báo kết quả 
 * 
 * Outputs:
 * result
 */
let bai1 = function(){

    let iluong1ngay = Number(document.getElementById('iluong1ngay').value);
    let isongaydilam = Number(document.getElementById('isongaydilam').value);

    kq = iluong1ngay * isongaydilam ;

    document.getElementById('txtbai1').innerHTML = kq.toLocaleString() + ' VND';
}
