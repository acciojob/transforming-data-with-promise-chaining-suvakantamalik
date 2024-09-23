//your JS code here. If required.
const outputBox = document.getElementById("output");
function delayPromise(value, delay){
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(value);
		}, delay);
	})
}

document.getElementById("btn").addEventListener("click", () => {
	const inputNumber = document.getElementById("ip").value;

	delayPromise(inputNumber, 2000)
		.then((number) => {
			outputBox.innerText = `Result: ${number}`;
			return delayPromise(number * 2, 1000);
		})
		.then((number) => {
			outputBox.innerText = `Result: ${number}`;
			return delayPromise(number - 3, 1000);
		})
		.then((number) => {
			outputBox.innerText = `Result: ${number}`;
			return delayPromise(number / 2, 1000);
		})
		.then((number) => {
			outputBox.innerText = `Result: ${number}`;
			return delayPromise(number + 10, 1000);
		})
		.then((number) => {
			outputBox.innerText = `Result: ${number}`;
			outputBox.innerText = `Final Result: ${number}`;
		})
		.catch((error) => {
			outputBox.innerText = `Error: ${error.message}`;
		})
})

