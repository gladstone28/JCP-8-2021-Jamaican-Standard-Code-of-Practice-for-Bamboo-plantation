document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggleButton");
    var infoList = document.querySelector(".card-body ul");

    toggleButton.addEventListener("click", function() {
        if(infoList.style.display === "none") {
            infoList.style.display = "block";
        } else {
            infoList.style.display = "none";
        }
    });
});
