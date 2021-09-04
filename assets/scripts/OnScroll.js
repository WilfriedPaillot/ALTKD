window.onscroll = function () {
    if(document.documentElement.scrollTop > 140) {
        document.getElementById("navigation").classList.remove("bg-transparent");
        document.getElementById("navigation").classList.add("fixed-top", "bg-eerie-black");
        document.getElementById("logo").classList.remove("d-none");
        document.getElementById("vertical_title").classList.remove("d-xl-inline-flex");
    }
    else { 
        if(document.documentElement.scrollTop < 50){
        document.getElementById("navigation").classList.remove("fixed-top", "bg-eerie-black");
        document.getElementById("navigation").classList.add("bg-transparent");
        document.getElementById("logo").classList.add("d-none");
        document.getElementById("vertical_title").classList.add("d-xl-inline-flex");

        }
    }
}
