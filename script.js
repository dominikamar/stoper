const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const info = document.querySelector(".info");
const archBtn = document.querySelector(".history");
const closeModalBtn = document.querySelector(".close");
const timeList = document.querySelector(".time-list");
const stopWatch = document.querySelector(".stopwatch");
const time = document.querySelector(".time");
const modalShadow = document.querySelector(".modal-shadow");
const greenCircle = document.querySelector(".green");
const redCircle = document.querySelector(".red");
const blueCircle = document.querySelector(".blue");
const colourBox = document.querySelector(".colours");
let root = document.documentElement;
const brushBtn = document.querySelector(".colour-choose");

let countTime;
let minutes = 0;
let seconds = 0;

let timesArr = [];
const handleStart = () => {
	clearInterval(countTime);
	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++;
			stopWatch.textContent = `${minutes}:0${seconds}`;
		} else if (seconds >= 9 && seconds < 59) {
			seconds++;
			stopWatch.textContent = `${minutes}:${seconds}`;
		} else {
			minutes++;
			seconds = 0;
			stopWatch.textContent = `${minutes}:00`;
		}
	}, 1000);
};

const handlePause = () => {
	clearInterval(countTime);
};

const handleStop = () => {
	time.innerHTML = `Ostatni czas: ${stopWatch.textContent}`;

	if (stopWatch.textContent !== "0:00") {
		time.style.visibility = "visible";
		timesArr.push(stopWatch.textContent);
	}

	clearStuff();
};

const handleReset = () => {
	time.style.visibility = "hidden";
	timesArr = [];
	clearStuff();
};
const clearStuff = () => {
	clearInterval(countTime);
	stopWatch.textContent = "0:00";
	timeList.textContent = "";
	seconds = 0;
	minutes = 0;
};

const showArch = () => {
	timeList.textContent = "";
	let num = 1;
	timesArr.forEach((time) => {
		const newTime = document.createElement("li");
		newTime.innerHTML = `Pomiar nr ${num}: <span>${time}</span>`;
		timeList.append(newTime);
		num++;
	});
};

const showModal = () => {
	if (!(modalShadow.style.display === "block")) {
		modalShadow.style.display = "block";
	} else {
		modalShadow.style.display = "none";
	}
	modalShadow.classList.toggle("modal-animation");
};

showColours = () => {
	colourBox.classList.toggle("show-colours");
};

startBtn.addEventListener("click", handleStart);
pauseBtn.addEventListener("click", handlePause);
stopBtn.addEventListener("click", handleStop);
resetBtn.addEventListener("click", handleReset);
archBtn.addEventListener("click", showArch);
info.addEventListener("click", showModal);
closeModalBtn.addEventListener("click", showModal);
window.addEventListener("click", (e) =>
	e.target === modalShadow ? showModal() : false
);
greenCircle.addEventListener("click", () => {
	root.style.setProperty("--first-color", "rgb(0,255,0)");
});
redCircle.addEventListener("click", () => {
	root.style.setProperty("--first-color", "rgb(255,0,0)");
});
blueCircle.addEventListener("click", () => {
	root.style.setProperty("--first-color", "rgb(65,105,225)");
});
brushBtn.addEventListener("click", showColours);
