document.addEventListener("click",function (e){
    //console.log(e.target);
    if (e.target.classList.contains("img-thumbnail")){
        const src = e.target.getAttribute("src");
        const paragraphContent = e.target.getAttribute("alt");
        document.querySelector(".modal-img").src = src;
        document.querySelector(".modal-img-legend").textContent = paragraphContent;
        const myModal = document.getElementById('gallerie-modal');
        myModal.show(myModal);
    }
})