// Valide si l'utilisateur a bien renseigné un nom
document.getElementsByTagName('form')[0].addEventListener('submit', function (e) {
	var nom = document.querySelector('#nom')
	if (nom.value === '') {
		alert('Vous devez renseigner votre nom !')
		e.preventDefault()
	}
})

// Ajoute un champ 'Précisez votre theme : ' lorsqu'un utilisateur selectionne 'Autre' (theme préféré)
document.querySelector('#theme').addEventListener('change', function () {
	var theme = document.querySelector('#theme').selectedOptions[0].value
	var form = document.getElementsByTagName('form')[0]

	if (theme === 'autre') {
		var submit = form.getElementsByTagName('button')[0]
		var label = document.createElement('label')
		var input = document.createElement('input')
		var retourCharriot = document.createElement('br')

		label.htmlFor = 'extraInput'
		label.textContent = 'Précisez votre theme : '
		input.id = 'extraInput'
		input.type = 'text'
		input.name = 'theme2'

		form.insertBefore(label, submit)
		form.insertBefore(input, submit)
		form.insertBefore(retourCharriot, submit)
	} else {
		if (form.length === 8) {
			var label = form.getElementsByTagName('label')[5]
			var input = form.getElementsByTagName('input')[4]
			var retourCharriot = form.getElementsByTagName('br')[3]

			label.parentNode.removeChild(label)
			input.parentNode.removeChild(input)
			retourCharriot.parentNode.removeChild(retourCharriot)
		}
	}
})