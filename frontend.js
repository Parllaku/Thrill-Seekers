//popup contact form


//valedating all fields

function input_fields(){
	if (document.getElementById('name').value==""|| document.getElementById('email').value==""|| document.getElementById('msg').value==""){
	    alert("Complete All Fields!!!");
	}
     else{
       	document.getElementById('form').submit();
       	alert("Message Send Succesfully !");
       }
}

//display contact form

function show_form()
{
	document.getElementById('messagebox').style.display = "block";

}

//close contact form

function close_form(){
	document.getElementById("messagebox").style.display="none";
}

/*audio player*/

function playclip()
{
	if(navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1)||
		(navigator.appVersion.indexOf("MSIE 8")!=-1))
	{
		if (document.all)
		 {
		 	document.all.sound.src="audio/vinz.mp3";
		}	
	}
	else
	{
		var audio = document.getElementsByTagName("audio")[0];
		audio.play();
	}

}




//sidebar

function openNav(){
	document.getElementById("mySidenav").style.display ="table"
}


