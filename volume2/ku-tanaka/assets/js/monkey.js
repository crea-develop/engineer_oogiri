$(function(){

	var monkey = ["red","yellow","white","black","aqua","darkviolet","gold","navy","mediumspringgreen","whitesmoke"];
	var btnClick = ['','','','','','','<a href="http://www.monkeypark.jp/" target="_blank" id="monkey" />'];

	$('.monkey').on("click", function(){
		var divClass = $(this).attr("class");
		var monkeyId = $('.monkey a').attr("id");
		var randomMonkey = monkey[Math.floor(Math.random()*monkey.length)];
		var randomClick = btnClick[Math.floor(Math.random()*btnClick.length)];

		if(divClass == "monkey"){
			footerId(randomMonkey);
		}else if(monkeyId == "monkey"){
			footerId(randomMonkey);
		}else{
			footerId(randomMonkey);
			$('.monkey').wrapInner(randomClick);
		}
		console.log(monkeyId);
	});
	function footerId(a){
		$('.monkey').attr("class", "monkey " + a);
	}


});