import fruits from "./fruitsData.js";

const mediaScroller = document.getElementById("media-scroller");

function renderFruits() {
	const fruitElements = fruits.map(function (item) {
		return `
        <div class="media-element">
            <img class="media-image" src="${item.image}" alt="" />
            <p class="media-text">${item.fruit}</p>
        </div>
            `;
	});
	mediaScroller.innerHTML = fruitElements.join('');
}

renderFruits();
