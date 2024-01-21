let bai3 = function(){

    let kq = Number(document.getElementById('iTienQuiDoi').value);
    let tygia = Number(document.getElementById('iTyGia').value);

    kq = new Intl.NumberFormat('vn-VN', {
        style: 'currency',
        currency: 'VND'
      }).format(kq*tygia);  

    document.getElementById('txtbai3').innerHTML = kq;
}