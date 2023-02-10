//animações com scroll


const observer = new IntersectionObserver(entries => {
	Array.from(entries).forEach(entry => {
		if (entry.intersectionRatio >= 1 || entry.isIntersecting) {
			entry.target.classList.add('show');
		}
	})
	console.log(entries)
})

Array.from(document.querySelectorAll('.hide')).forEach(item => {
	observer.observe(item);
	console.log(item)
})

//menu icon
let menu = document.querySelector('.menu')
let active = true

function toggleMenu(menuIcon) {
	if (active) {
		active = false;
		menuIcon.classList.toggle('change');
		if (menu.classList.contains('menuIndo')) {
			menu.classList.remove('menuIndo')
			menu.classList.add('menuVoltando');
			setTimeout(() => {
				menu.classList.remove('menuVoltando');
			}, 1000)
		} else {
			menu.classList.add('menuIndo');
		}

		setTimeout(() => {
			active = true
		}, 1000)
	}
}

//digitação automatica
const name1 = document.querySelector('h1');
let texto = name1.innerHTML

let i = 0;

function autoTyping() {
	name1.innerHTML = '';
	setTimeout(() => {
		let type = setInterval(() => {
			name1.innerHTML += texto.charAt(i);
			i++;
			if (i == 4 || i == 23) {
				name1.innerHTML += '<br>'
			}
			if (i == texto.length) {
				clearInterval(type);
				console.log(1)
			}
		}, 80)
	}, 2000)

}
