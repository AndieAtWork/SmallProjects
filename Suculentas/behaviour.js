document.getElementById("home-tab").addEventListener("click", function(){
	document.getElementById("home").style.display = "flex"
	document.getElementById("products").style.display = "none"
	document.getElementById("contact").style.display = "none"
	console.log("home")
});

document.getElementById("products-tab").addEventListener("click", function(){
	document.getElementById("products").style.display = "block"
	document.getElementById("home").style.display = "none"
	document.getElementById("contact").style.display = "none"
	console.log("products")
});

document.getElementById("contact-tab").addEventListener("click", function(){
	document.getElementById("contact").style.display = "flex"
	document.getElementById("home").style.display = "none"
	document.getElementById("products").style.display = "none"
	console.log("contact")
});

document.addEventListener("DOMContentLoaded", function() {
    var dropdownButton = document.getElementById("dropdown-account");
    var dropdownBox = document.getElementById("dropdown-box");
    var dropdownArea = document.getElementById("dropdown-container");

    dropdownButton.addEventListener("click", function() {
      dropdownBox.style.display = (dropdownBox.style.display === "block") ? "none" : "block";
    });
    dropdownArea.addEventListener("mouseleave", function() {
      dropdownBox.style.display = "none";
    });

    // var images = document.getElementsByClassName("img");
    // for (var image of images){
    //     image.addEventListener("mouseover", function() {
    //         console.log("paso por encima");
    //     })
    // }
    
});

function selectedProduct(image){
    console.log(image);
}