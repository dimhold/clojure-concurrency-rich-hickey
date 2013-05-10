window.onload = main;

function main() {
	var video = document.getElementById("video");
	var time = document.getElementById("time");

	video.addEventListener("timeupdate", function (e) {
		time.innerHTML = timeToStr(video.currentTime);
	});
}

function timeToStr(time) {
	var milsec = String(time.toFixed(3)).split(".")[1]
	var second = Math.floor(time % 60);
	var minute = Math.floor(time / 60 % 60);
	var hour = Math.floor(time / 3600);

	var time = "";
	if (hour) {
		if (hour < 10) {
			time += "0" + hour + ":";
		} else {
			time += hour + ":";
		}
	}

	if (minute < 10) {
		time += "0" + minute + ":";
	} else {
		time += minute + ":";
	}

	if (second < 10) {
		time += "0" + second + ":";
	} else {
		time += second + ":";
	}

	time += milsec

	return time;
};
