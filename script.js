import {fruits, categories} from "./fruitsData.js";

const mediaScroller = document.getElementById("media-scroller");
const categoriesDiv = document.getElementById('categories-div') 

function renderFruits() {
	const fruitElements = fruits.map(function (item) {
		return `
        <div class="media-element">
            <img class="media-image" src="${item.image}" alt="" />
            <p class="media-text">${item.fruit}</p>
            <p class="media-price">₱${item.price}</p>
            <p class="media-review">${item.reviews}</p>
        </div>
            `;
	});
	mediaScroller.innerHTML = fruitElements.join(''); 
}

renderFruits();

function renderCategories() {
    const categoryElements = categories.map(function(category) {
        return `
        <div class="category-element">
            <img class="category-img" src="./images/categories/${category.image}" alt="" />
            <p class="category-text">${category.categoryName}</p>
        </div>`
    })
    categoriesDiv.innerHTML = categoryElements.join('')
}

renderCategories()
