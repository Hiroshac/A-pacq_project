function loadData(name) {
	
	if (name == "btn1")
	{
		document.getElementById("para").innerHTML = "This is cofee peeler";
		document.getElementById("image1").src = "../images/cofee.jpg";
	}
	
	else if (name == "btn2")
	{
		document.getElementById("para").innerHTML = "This is horizontal stone floor mill";
		document.getElementById("image1").src = "../images/horizo.jpg";
		
	}
	
	else if (name == "btn3")
	{
		document.getElementById("para").innerHTML = "This is masala";
		document.getElementById("image1").src = "../images/masala.jpg";
	}	

    else if (name == "btn4")
	{
		document.getElementById("para").innerHTML = "This is pellet";	
	    document.getElementById("image1").src = "../images/pellet.jpg";
	
	}
	else if (name == "btn5")
	{
		document.getElementById("para").innerHTML = "This is goraka paste machine";	
	    document.getElementById("image1").src ="../images/goraka.jpg";
	
	}
	else if(name == "btn6")
	{
		document.getElementById("para").innerHTML = "This is wafer machine";	
	    document.getElementById("image1").src = "../images/wafer.jpg";
	
	}
	
}