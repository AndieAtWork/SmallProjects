document.getElementById("home-tab").addEventListener("click", function(){
	document.getElementById("home").style.display = "flex";
	document.getElementById("products").style.display = "none";
	document.getElementById("contact").style.display = "none";
  	document.getElementById("cart-tab").style.display = "none";
	deselectAll();
	select("home-tab");
	console.log("home1");
});

document.getElementById("products-tab").addEventListener("click", function(){
	document.getElementById("products").style.display = "block";
	document.getElementById("home").style.display = "none";
	document.getElementById("contact").style.display = "none";
  	document.getElementById("cart-tab").style.display = "none";
	deselectAll();
	select("products-tab");
	console.log("products1");
});

document.getElementById("contact-tab").addEventListener("click", function(){
	document.getElementById("contact").style.display = "flex";
	document.getElementById("home").style.display = "none";
	document.getElementById("products").style.display = "none";
  	document.getElementById("cart-tab").style.display = "none";
	deselectAll();
	select("contact-tab");
	console.log("contact1");
});

document.getElementById("open-cart").addEventListener("click", function(){
	document.getElementById("contact").style.display = "none";
	document.getElementById("home").style.display = "none";
	document.getElementById("products").style.display = "none";
  	document.getElementById("cart-tab").style.display = "flex";
	deselectAll();
	console.log("cart1");
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
});

function deselectAll(){
	document.getElementById("home-tab").classList.remove("nav-item-selected");
	document.getElementById("products-tab").classList.remove("nav-item-selected");
	document.getElementById("contact-tab").classList.remove("nav-item-selected");
}

function select(id){
	document.getElementById(id).classList.add("nav-item-selected");
}