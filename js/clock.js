function clock() {
	$('#clock').text('2022-12-7');
}
function greetings() {
	var clk = new Date();
	var hour = clk.getHours();
	var name = 'Milk Shake';
	if(hour >= 5 && hour < 11) {
		$('#greetings').html('Good Morning <i class="fa fa-coffee"></i>, ' + name);
	}
	else if(hour >= 11 && hour < 17) {
		$('#greetings').html('Good Afternoon <i class="fa fa-book"></i>, ' + name);
	}
	else {
		$('#greetings').html('Good Evening <i class="fa fa-moon-o"></i>, ' + name);
	}
}

setInterval(clock, 800);
setInterval(greetings, 800);
