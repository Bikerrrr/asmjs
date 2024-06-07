var arr_hinh = [

    "img/IMG_4135-600x600.jpg",
    "img/IMG_4136-600x600.jpg",
    "img/IMG_4138-600x600.jpg"

]

var index = 0;
function back() {
    index--;
    if (index < -0) index = arr_hinh.length - 1;
    document.getElementById("background").src = arr_hinh[index];

}

function next() {
    index++;
    if (index >= arr_hinh.length) index = 0;
    document.getElementById("background").src = arr_hinh[index];

}

function star(){

    document.getElementById("background").src = ["img/IMG_4135-600x600.jpg"];

}

function between(){

    document.getElementById("background").src = ["img/IMG_4136-600x600.jpg"];

}

function end(){

    document.getElementById("background").src = ["img/IMG_4138-600x600.jpg"];

}



function display(){

    var pro = document.getElementById("pro");
    var name = pro.innerText;
    var price = pro.getAttribute("data-price");
    var quantity = quantity_6648422811a1e.value;
    var amount = price * quantity;

    document.getElementById("ten").innerText = name;
    document.getElementById("amount").innerText = amount;


}

