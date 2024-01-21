// * Function
// *      B1: lấy dữ liệu từ form
// *      B2: tính chu vi và diện tích
// *          let chuVi = (chieuDai+chieuRong)*2;
// *          let dienTich = chieuDai*chieuRong;
// *      B3: thông báo kết quả 


let bai4 = function(){

    let chieuDai = Number(document.getElementById('iChieuDai').value);
    let chieuRong = Number(document.getElementById('iChieuRong').value);

    let chuVi = (chieuDai+chieuRong)*2;
    let dienTich = chieuDai*chieuRong;

    document.getElementById('txtbai4').innerHTML = 'Diện tích: ' + dienTich + '; Chu vi: ' + chuVi;
}