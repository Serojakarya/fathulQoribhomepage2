function openDrop1() {
		document.getElementById("det-list1").classList.toggle("show");
		document.getElementById("puasa-card1").classList.toggle("card-show");
        var d1 = document.getElementById("det-list1").classList;
		if(d1.contains("show"));
    document.getElementById("det-list2").classList.remove('show');
	document.getElementById("det-list3").classList.remove('show');
	document.getElementById("det-list4").classList.remove('show');
	document.getElementById("det-list5").classList.remove('show');
    }
	
	function openDrop2() {
		document.getElementById("det-list2").classList.toggle("show");
		document.getElementById("puasa-card2").classList.toggle("card-show");
        var d1 = document.getElementById("det-list2").classList;
		if(d1.contains("show"));
    document.getElementById("det-list1").classList.remove('show');
	document.getElementById("det-list3").classList.remove('show');
	document.getElementById("det-list4").classList.remove('show');
	document.getElementById("det-list5").classList.remove('show');
    }
	
	function openDrop3() {
		document.getElementById("det-list3").classList.toggle("show");
		document.getElementById("puasa-card3").classList.toggle("card-show");
        var d1 = document.getElementById("det-list3").classList;
		if(d1.contains("show"));
    document.getElementById("det-list1").classList.remove('show');
	document.getElementById("det-list2").classList.remove('show');
	document.getElementById("det-list4").classList.remove('show');
	document.getElementById("det-list5").classList.remove('show');
    }
	
	function openDrop4() {
		document.getElementById("det-list4").classList.toggle("show");
		document.getElementById("puasa-card4").classList.toggle("card-show");
        var d1 = document.getElementById("det-list4").classList;
		if(d1.contains("show"));
    document.getElementById("det-list1").classList.remove('show');
	document.getElementById("det-list2").classList.remove('show');
	document.getElementById("det-list3").classList.remove('show');
	document.getElementById("det-list5").classList.remove('show');
    }
	
	function openDrop5() {
		document.getElementById("det-list5").classList.toggle("show");
		document.getElementById("puasa-card5").classList.toggle("card-show");
        var d1 = document.getElementById("det-list5").classList;
		if(d1.contains("show"));
    document.getElementById("det-list1").classList.remove('show');
	document.getElementById("det-list2").classList.remove('show');
	document.getElementById("det-list3").classList.remove('show');
	document.getElementById("det-list4").classList.remove('show');
    }
	
		window.addEventListener("click", function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("det-list");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
	
  }
});