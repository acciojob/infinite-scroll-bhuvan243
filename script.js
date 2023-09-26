//your code here!
const scrollContainer = document.getElementById("infi-list");

let i=0;
function addItems(){
	let item = document.createElement("li");
	item.innerText = `Item ${++i}`;
	scrollContainer.appendChild(item);
}

for (let i=0; i<10; i++){
	addItems();
}

scrollContainer.addEventListener("scroll", ()=> {
	const scrollableHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
	const remainingScrollTop = scrollContainer.scrollTop;

	let threshold = Math.abs(scrollableHeight - remainingScrollTop);
	if (threshold <= 5){
		for (let i=0; i<2; i++){
			addItems();
		}
	}
});