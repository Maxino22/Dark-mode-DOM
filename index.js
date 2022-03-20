const mode = document.querySelector('.mode')
const currentMode = document.getElementById('mode')
const modeText = document.getElementById('mode-text')
const icon = document.getElementById('icon')

mode.addEventListener('change', (e) => changeMode(e.target))

function changeMode() {
	if (currentMode.checked) {
		modeText.innerText = 'Dark'
		document.body.style.backgroundColor = 'black'
		document.body.style.color = 'white'
		icon.innerHTML = '<i class="fa-solid fa-moon"></i>'
	} else {
		modeText.innerText = 'Light'
		document.body.style.backgroundColor = '#fff'
		document.body.style.color = 'black'
		icon.innerHTML = '<i class="fa-solid fa-sun"></i>'
	}
}
