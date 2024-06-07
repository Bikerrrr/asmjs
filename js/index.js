var arr_hinh =[ "img/cafe.jpg",
                    "img/slide-gong-2.jpg",
                "img/slide-gong.jpg"]

            

var index = 0;
function back(){
    index--;
    if(index <-0) index = arr_hinh.length-1;
    document.getElementById("background").src= arr_hinh[index];

}

function next(){
        index++;
        if(index >=arr_hinh.length) index = 0;
        document.getElementById("background").src= arr_hinh[index];
    
}

changeimg = function(){

    var arr_hinh =[ "img/cafe.jpg",
                    "img/slide-gong-2.jpg",
                "img/slide-gong.jpg"]

    document.getElementById("background").src= arr_hinh[index];

    index++;

    if(index == 3){
        index = 0
    }

}
setInterval(changeimg,3000);

