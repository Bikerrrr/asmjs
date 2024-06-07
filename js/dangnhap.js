function kiemtra(){
    var loi = ""

    
    var email = document.getElementById("email");
    if (email.value == "") {
        email.className = "loi";
        loi += "email không được bỏ trống<br>";

    }
    else if (email.value.length > 30 ) {
        email.className = "loi";
        loi += "email lớn hơn 30 ký tự<br>";
    }
    else {
        email.className = "txt";
    }



    var pass = document.getElementById("pass");
    if (pass .value == "") {
        pass .className = "loi";
        loi += "pass khong dc bo trong<br>";

    }
    else {
        email.className = "txt";
    }





    var baoloi = document.getElementById("baoloi");
            if (loi.length > 0) {
                baoloi.innerHTML = loi;
                return false;
            } else {
                baoloi.innerHTML = "";
                alert("đăng nhập thành công!!!!!")
                return true;
            }

}