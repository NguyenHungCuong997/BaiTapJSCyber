

// num%10 + (num-num%10)/10%10;
let bai5 = function(){

    let num = Number(document.getElementById('ikyso').value);
    kq = num%10 + (num-num%10)/10%10;

    document.getElementById('txtbai5').innerHTML = kq;
}