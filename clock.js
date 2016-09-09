function updateTime() {
	//get parts of the current time
	var now = new Date();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	
	//add leading zeros to minutes and seconds
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	if (seconds < 10) {
		seconds = '0' + seconds;
	}
	
	//get time of day a.m. or p.m.
	if (hours >= 12 && hours < 24) {
		var timeOfDay = 'pm';
	}
	else {
		var timeOfDay = 'am';
	}
	
	if (hours > 12) {
		hours = hours - 12;
	}
	
	//splice them together into a character string named "currentTime"
	var currentTime = '<div class="wrapper">' + '<div class="digits">' + hours + ":" + minutes + ":" + seconds + '</div>' + " " + '<span>' + timeOfDay + '</span>' + '</div>';
	
	//get the clock div
	var myClock = document.getElementById("clock");
	
	//write the currentTime string to the clock div
	myClock.innerHTML = currentTime;

}