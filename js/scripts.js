$(document).ready(function(){
  $("form#formName").submit(function(event){
	var x = $("input#newItem").val(); 	    
	$("span#hiddenAlso").text(x)	
	$(".response").show();
	  event.preventDefault();


	});	
    });