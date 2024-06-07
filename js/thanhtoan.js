function kiemtra() {

    var loi = "";
   
    
    //ktra ho ten
    var hoten = document.getElementById("hoten")
    if (hoten.value == "") {
        hoten.className = "loi";
        loi += "Ho ten khong dc bo trong<br>";
    } else if (hoten.value.length > 30) {
        hoten.className = "loi";
        loi += "Họ và tên không được quá 30 ký tự<br>"; 
    } else {
        hoten.className = "txt";
    }

    //ktra email
   
    var email = document.getElementById("email")
    if (email.value == "") {
        email.className = "loi";
        loi += "email khong dc bo trong<br>";
    } else if (email.value.length > 30) {
        email.className = "loi";
        loi += "email qua dai<br>";
    }
     else {
        email.className = "txt";
    }

    


    
    var diachi = document.getElementById("diachi");
    if (diachi.value == "") {
        diachi.className = "loi";
        loi += "Địa chỉ không được bỏ trông<br>";

    }
    else {
        diachi.className = "txt";
    }

    
    


    
    var loaithe = document.getElementById("loaithe");
    if(loaithe.value == "0") {
        loaithe.className = "loi";
        loi += "Vui lòng chọn Loại Thẻ!!!<br>";
    } else {
        loaithe.className = "txt";
    } 

    var nganhang = document.getElementById("nganhang");
    if(nganhang.value == "0") {
        nganhang.className = "loi";
        loi += "Vui lòng chọn Ngân Hàng!!!<br>";
    } else {
        nganhang.className = "txt";
    } 








    var baoloi = document.getElementById("baoloi");
    if (loi.length > 0) {
        baoloi.innerHTML = loi;
        return false;
    } else {
        baoloi.innerHTML = "";
        alert("Thanh Toán thành công!!!!!")
        return true;
    }


   

}