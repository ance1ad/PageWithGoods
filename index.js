class Product {
	constructor(title, price, pPrice, className, isLight, isNew, image) {
		this.title = title;
		this.price = price;
		this.pPrice = pPrice;
		this.className = className;
		this.light = isLight;
		this.isNew = isNew;
		this.image = image;
	}
}
let products = [];
products.push(new Product('SPC ЛАМИНАТ ROYCE EMOTION ДУБ МОКСИ EM-609', 1590, 1590, '42 класс 4 мм', false, false, 'img/catalog/ROYCE EMOTION ДУБ МОКСИ EM-609.png'));
products.push(new Product('SPC ЛАМИНАТ ROYCE EMOTION ДУБ ГУСТО EM-604', 1590, 1590, '42 класс 4 мм', true, false, 'img/catalog/ROYCE EMOTION ДУБ ГУСТО EM-604.png'));
products.push(new Product('SPC ЛАМИНАТ ROYCE EMOTION ДУБ СЬЮРЕТИ EM-605', 1590, 1590, '42 класс 4 мм', false, false, 'img/catalog/ROYCE EMOTION ДУБ СЬЮРЕТИ EM-605.png'));
products.push(new Product('SPC ЛАМИНАТ ROYCE EMOTION ДУБ ТРАСТ EM-603', 1590, 1590, '42 класс 4 мм', true, false, 'img/catalog/ROYCE EMOTION ДУБ ТРАСТ EM-603.png'));
products.push(new Product('SPC ЛАМИНАТ ROYCE SENSE ДУБ АЙА SE-710', 1620, 1620, '42 класс 4 мм', false, false, 'img/catalog/ROYCE SENSE ДУБ АЙА SE-710.png'));
products.push(new Product('SPC ЛАМИНАТ ROYCE SENSE ДУБ КААБА SE-705', 1620, 1620, '42 класс 4 мм', true, false, 'img/catalog/ROYCE SENSE ДУБ КААБА SE-705.png'));
products.push(new Product('SPC ЛАМИНАТ ROYCE ENJOY ДУБ ЭШФОРД E310', 1390, 1390, '42 класс 3.5 мм', true, false, 'img/catalog/ROYCE ENJOY ДУБ ЭШФОРД E310.png'));
products.push(new Product('SPC ЛАМИНАТ ROYCE ENJOY ДУБ НОРДБОРГ E306', 1390, 1390, '42 класс 3.5 мм', true, false, 'img/catalog/ROYCE ENJOY ДУБ НОРДБОРГ E306.png'));
products.push(new Product('SPC ЛАМИНАТ ROYCE ENJOY ДУБ БЛЭКРОК E308', 1390, 1390, '42 класс 3.5 мм', false, false, 'img/catalog/ROYCE ENJOY ДУБ БЛЭКРОК E308.png'));
products.push(new Product('SPC ЛАМИНАТ MODULEO LAYERED LAUREL OAK 51864', 1890, 2240, '33 класс 6 мм', false, true, 'img/catalog/MODULEO LAYERED LAUREL OAK 51864.png'));
products.push(new Product('SPC ЛАМИНАТ MODULEO LAYERED CANTERA 46930', 1790, 2170, '33 класс 6 мм', false, true, 'img/catalog/MODULEO LAYERED CANTERA 46930.png'));
products.push(new Product('SPC ЛАМИНАТ MODULEO LAYERED MOUNTAIN OAK 56275', 1850, 2030, '33 класс 6 мм', true, true, 'img/catalog/MODULEO LAYERED MOUNTAIN OAK 56275.png'));



itemsInfo = document.querySelectorAll(".catalogInfo p:nth-child(2)");
itemsClass = document.querySelectorAll(".catalogInfo p:nth-child(3)");
itemsPrice = document.querySelectorAll(".catalogInfo p:nth-child(4)");

document.addEventListener("DOMContentLoaded", () => {
	for (let i = 0; i < products.length; i++) { // Подгрузка данных для каждого айтема
		itemsInfo[i].innerHTML = products[i].title;
		itemsClass[i].innerHTML = products[i].className;
		if (products[i].price == products[i].pPrice) {
			itemsPrice[i].innerHTML = products[i].price + " ₽ / м²";
		} else {
			itemsPrice[i].innerHTML = products[i].price + " ₽ <del style=\"color:rgba(0, 0, 0, 0.3);\">  " + products[i].pPrice + "</del> / м²";
		}
	}
	//Кнопки сортировки
	const allSorts = document.querySelectorAll(".sortItem");

	for (let i = 0; i < allSorts.length; i++) {
		allSorts[i].addEventListener('click', () => {
			allSorts.forEach((e) => {
				e.style.backgroundColor = '#F4F4F6';
			});
			allSorts[i].style.backgroundColor = '#c4c4c4';
			let selectedItems = [];
			let inHTML = "";
			const catalog = document.getElementById("catalog");
			switch (i) {
				case 0: //Со скидкой
					products.forEach((e) => {
						if (e.price != e.pPrice) {
							selectedItems.push(e);
						}
					});

					catalog.innerHTML = fillCatalog(selectedItems);
					break;

				case 1: //Прямоугольные
					products.forEach((e) => {
						selectedItems.push(e);
					});
					catalog.innerHTML = fillCatalog(selectedItems);
					break;

				case 2: //Дерево
					products.forEach((e) => {
						if (e.title.indexOf("ДУБ") !== -1) {
							selectedItems.push(e);
						}
					});
					catalog.innerHTML = fillCatalog(selectedItems);
					break;
				case 3: //Для пола
					products.forEach((e) => {
						selectedItems.push(e);
					});
					catalog.innerHTML = fillCatalog(selectedItems);
					break;
				case 4: //Только светлые
					products.forEach((e) => {
						if (e.light) {
							selectedItems.push(e);
						}
					});
					catalog.innerHTML = fillCatalog(selectedItems);
					break;
				case 5: //Замковая
					products.forEach((e) => {
						if (e.title.indexOf("E30") !== -1) {
							selectedItems.push(e);
						}
					});
					catalog.innerHTML = fillCatalog(selectedItems);
					break;
				case 6: //Для гостинной
					products.forEach((e) => {
						if (e.title.indexOf("ROYCE") !== -1) {
							selectedItems.push(e);
						}
					});
					catalog.innerHTML = fillCatalog(selectedItems);
					break;
			}
		});
	}

	//Выбор сортировки
	const sortChoose = document.getElementById("sortChoose"); //Кнопка сортировать
	const sortChooseBlock = document.getElementById("sortChooseBlock"); //блок сортировки
	sortChoose.addEventListener('click', () => {
		sortChooseBlock.style.display = 'flex'; //Показать блок выбора сортировки
	});
	const options = document.querySelectorAll(".option");
	sortVar = -1;
	for (let i = 0; i < options.length; i++) {
		options[i].addEventListener('click', () => {
			sortVar = i;
			const allDots = document.querySelectorAll(".option>div");
			allDots.forEach((e) => {
				e.style.backgroundColor = 'white';
			});
			allDots[i].style.backgroundColor = 'black';
		});
	}

	const sortChooseBlockButton = document.querySelector("#sortChooseBlock > .buy-button"); //Кнопка применить
	sortChooseBlockButton.addEventListener('click', () => {
		let selectedItems = [];
		if (sortVar != -1) {
			switch (sortVar) {
				case 0:
					products.forEach((e) => {
						selectedItems.push(e);
					});
					catalog.innerHTML = fillCatalog(selectedItems);
					break;
				case 1:
					products.forEach((e) => {
						if (e.isNew) {
							selectedItems.push(e);
						}
					});
					catalog.innerHTML = fillCatalog(selectedItems);
					break;
				case 2:
					products.forEach((e) => {
						selectedItems.push(e);
					});
					selectedItems.sort((a, b) => {
						return a.price - b.price;
					});
					catalog.innerHTML = fillCatalog(selectedItems);
					break;
				case 3:
					products.forEach((e) => {
						selectedItems.push(e);
					});
					selectedItems.sort((a, b) => {
						return b.price - a.price;
					});
					catalog.innerHTML = fillCatalog(selectedItems);
					break;
			}
			sortChooseBlock.style.display = 'none';
		}
	});
	rect = sortChoose.getBoundingClientRect();

	sortChooseBlock.style.top = `${rect.bottom + 15}px`;
	sortChooseBlock.style.left = `${rect.left - ((rect.right - rect.x) / 2)}px`;

	window.addEventListener('resize', () => {
		rect = sortChoose.getBoundingClientRect();
		sortChooseBlock.style.top = `${rect.bottom + 15}px`;
		sortChooseBlock.style.left = `${rect.left - ((rect.right - rect.x) / 2)}px`;
	});
});
//Возрват отстортированных элементов
function fillCatalog(selectedItems) {
	let inHTML = "";
	selectedItems.forEach((e) => {
		inHTML += `<div class="catalogItem">
                      <div class="imageContainer">`;

		// Добавление значков скидок и новинок
		if (e.price != e.pPrice || e.isNew) {
			inHTML += `<div class="icons">`;
			if (e.price != e.pPrice) {
				inHTML += `<img class="discountImg" src="img/discount.png">`;
			}
			if (e.isNew) {
				inHTML += `<img class="newImg" src="img/new.png">`;
			}
			inHTML += `</div>`;
		}

		inHTML += `<img class="catalogImg" src="${e.image}">
                   </div> <!-- Закрытие imageContainer -->
                   <div class="catalogInfo">
                       <div class="catalogItemCircles">
                           <div></div>
                           <div></div>
                       </div>
                       <p>${e.title}</p>
                       <p>${e.className}</p>`;
		if (e.price != e.pPrice) {
			inHTML += `<p>${e.price}₽ <del style="color: grey;">${e.pPrice}₽</del>/ м²</p>`;
		} else {
			inHTML += `<p>${e.price}₽ / м²</p>`;
		}
		inHTML += `<button class="buy-button">Купить</button>
                   </div>
                 </div>`;
	});
	return inHTML;
}

