/*
	WEB 303 Assignment 1 - jQuery
	{Moksha Patel}
*/

$(document).ready(function(){
	$("input").change(function(){
		let Salary = $("#yearly-salary").val();
		let Percentage = $("#percent").val();
		let spentamount = ((Salary*Percentage)/100).toFixed(2);
	
		$("#amount").text("$" + spentamount);
	});
});	

