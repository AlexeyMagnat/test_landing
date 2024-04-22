/*document.addEventListener('DOMContentLoaded', function () {
	// Получаем элементы карусели
	const carouselContainer = document.querySelector('.carousel-container');
	const carouselCards = document.querySelectorAll('.carousel-card');
	const totalCards = carouselCards.length;
	const visibleCards = 3; // Количество видимых карточек
	let currentIndex = 0; // Индекс текущей карточки

	let offset = 0; // смещение
	const carouselWrapper = document.querySelector(".carousel-wrapper");
	const cardWidth = carouselCards[0].offsetWidth; // Ширина одной карточки
	const maxOffset = (totalCards - visibleCards) * cardWidth + 40; // Максимальное смещение

	// Функция для обновления счетчика
	function updateCounter() {
		document.querySelector('.counter-text').textContent = currentIndex + 1;
	}

	// Функция для перемещения карточек
	function moveCarousel(direction) {
		if (direction === 'left') {
			currentIndex = (currentIndex + 1) % totalCards;
		} else if (direction === 'right') {
			currentIndex = (currentIndex - 1 + totalCards) % totalCards;
		}
		carouselWrapper.style.left = `-${currentIndex * cardWidth}px`;
		updateCounter();
	}

	// Добавляем обработчики событий для кнопок навигации
	document.querySelector(".prev").addEventListener("click", function () {
		moveCarousel('left');
	});

	document.querySelector(".next").addEventListener("click", function () {
		moveCarousel('right');
	});

	// Запускаем карусель
	moveCarousel('right'); // Инициализация
	setInterval(() => moveCarousel('left'), 4000); // Переключаем каждые 4 секунды
});

*/






/* второй слайдер*/
const members = new Swiper('.carousel-container', {
	// Optional parameters
	direction: 'horizontal',
	spaceBetween: 10,
	slidesPerView: 3,
	loop: true,
	speed: 500,
	


	// If we need pagination
	pagination: {
		el: '.carousel-counter',
		clickable: true,
		type: "fraction",
	},

	// Navigation arrows
	navigation: {
		nextEl: '.next',
		prevEl: '.prev',
	},
	
	autoplay: {
delay: 4000,
	},

	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		420: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 20,
		}
	}

});
