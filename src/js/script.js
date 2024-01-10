const footerYear = document.querySelector('.footer__year')
const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
	navMobile.classList.toggle('active')
	document.body.classList.toggle('sticky-body')
}
const removeStickyBody = () => {
	document.body.classList.remove('sticky-body')
	navMobile.classList.remove('active')
	navMobile.classList.remove('nav-mobile--active')
	navBtn.classList.remove('is-active')
}
navBtn.addEventListener('click', handleNav)
navMobile.addEventListener('click', removeStickyBody)
// =========================================================================================================
const sliderBox = document.querySelector('.slider-box')
const leftBtn = document.querySelector('.btn-left')
const rightBtn = document.querySelector('.btn-right')
const carouselImages = document.querySelectorAll('.slider-img')
// const carouselWidth = 800
const clientWidth1 = document.querySelector('.slider-img').clientWidth
const carouselWidth = clientWidth1
const carouselSpeed = 3000
let index = 0
const handleCarousel = () => {
	index++
	changeImage()
}

let startCarousel = setInterval(handleCarousel, carouselSpeed)

const changeImage = () => {
	if (index > carouselImages.length - 1) {
		index = 0
	} else if (index < 0) {
		index = carouselImages.length - 1
	}
	sliderBox.style.transform = `translateX(${-index * carouselWidth}px)`
}
const handleRightArrow = () => {
	index++
	resetInterval()
}
const handleLeftArrow = () => {
	index--
	resetInterval()
}
const resetInterval = () => {
	changeImage()
	clearInterval(startCarousel)
	startCarousel = setInterval(handleCarousel, carouselSpeed)
}
rightBtn.addEventListener('click', handleRightArrow)
leftBtn.addEventListener('click', handleLeftArrow)
