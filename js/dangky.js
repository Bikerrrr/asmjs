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

    //ktra matkhau
    var pass = document.getElementById("pass");
    if (pass .value == "") {
        pass .className = "loi";
        loi += "pass khong dc bo trong<br>";

    }else if(pass.value.length > 15){
        pass.className = "loi";
        loi += "mật khẩu quá dài<br>"

    }
    else {
        email.className = "txt";
    }


    //ktra nhap lai matkhau
    var repass = document.getElementById("Repass");
    if (repass.value == "") {
        repass.className = "loi";
        loi += "Repass không được bỏ trông<br>";

    }
    else {
        email.className = "txt";
    }

    
    var arrr = document.getElementsByName("st");
    var sothich = false;
    for (var i = 0; i < arrr.length; i++) {
        if (arrr[i].checked) {
            sothich = true;
            break;
        }
    }
    if (!sothich) {
        loi += "Vui lòng chọn sở thích!!!<br>"
    }


    var quoctich = document.getElementById("quoctich");
if(quoctich.value == "0") {
    quoctich.className = "loi";
    loi += "Vui lòng chọn quốc tịch!!!<br>";
} else {
    quoctich.className = "txt";
}   








    var baoloi = document.getElementById("baoloi");
    if (loi.length > 0) {
        baoloi.innerHTML = loi;
        return false;
    } else {
        baoloi.innerHTML = "";
        alert("đăng kí thành công!!!!!")
        return true;
    }


   

}