let count = 0;

const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const countElement = document.getElementById('count');

if(localStorage.getItem("count") == null){
	localStorage.setItem("count", "0")
}else{
	count = parseInt(localStorage.getItem("count"))
	countElement.innerHTML = count;
}

increment.addEventListener('click', () => {
  count++;
  countElement.innerHTML = count;
  localStorage.setItem("count", count.toString())
});

decrement.addEventListener('click', () => {
	if(count > 0){
  		count--;
  		countElement.innerHTML = count;
	}
	localStorage.setItem("count", count.toString())
});

document.addEventListener('keydown', (event) => {
	if(event.code == "ArrowLeft"){
		if(count > 0){
			count--;
			countElement.innerHTML = count;
		}
		localStorage.setItem("count", count.toString())
	}else if(event.code == "ArrowRight"){
		count++;
		countElement.innerHTML = count;
		localStorage.setItem("count", count.toString())
	}
  }, false);