 <script type="text/javascript">
    	
    	document.getElementById("button1").
    		addEventListener("click", function(){

    		document.getElementById("box").style.height =
    		"250px";
    		
    	});

    	document.getElementById("button2").
    		addEventListener("click", function(){

    		document.getElementById("box").style.backgroundColor = "Blue";

    	});

    	document.getElementById("button3").
    		addEventListener("click", function(){

    		document.getElementById("box").setAttribute("style","opacity:0.5;-moz-opacity:0.5; filter:alpha(opacity=100)");
    		});

    	document.getElementById("button4").
    		addEventListener("click", function(){

    		document.getElementById("box").style.height = 
    			"150px";
    		document.getElementById("box").style.backgroundColor = "Orange";
    		});

    </script>