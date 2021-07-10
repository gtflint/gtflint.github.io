window.onresize = navbarSize;
window.onload = navbarSize;

function navbarSize(){
	if (window.innerWidth < 500){
		var items = document.getElementsByClassName("right");
		for (var i = 0; i < items.length; i++) {
  			 items[i].style.display = "none";
		}
		items = document.getElementsByClassName("contactMe");
		for (var i = 0; i < items.length; i++) {
  			 items[i].style.display = "block";
		}
	} else {
		var items = document.getElementsByClassName("right");
		for (var i = 0; i < items.length; i++) {
  			 items[i].style.display = "block";
		}
		items = document.getElementsByClassName("contactMe");
		for (var i = 0; i < items.length; i++) {
  			 items[i].style.display = "none";
		}
	}
}