

// POST DATA to the Excel 
/* 
const scriptURL= 'https://script.google.com/macros/s/AKfycbwgll4p9cMsgKqtr3qvcsik2AgxcY6Nq0PANQYBW-Zki6IQZ16p/exec'; */

/* https://script.google.com/macros/s/AKfycbwgll4p9cMsgKqtr3qvcsik2AgxcY6Nq0PANQYBW-Zki6IQZ16p/exec */

const scriptURLC = 'https://script.google.com/macros/s/AKfycbytD8ZInnztP6y_E-p1G8ZQ3KpYMNtNuId4CLVAAdsPH0swtmL4nlQ5eg/exec'


const formc = document.forms['html-form-to-google-sheet'];



formc.addEventListener('submit', e => {
	// todo disable submit button
	e.preventDefault();
	document.getElementById('but').classList.add('loading');
	fetch(scriptURLC, {
			method: 'POST',
			body: new FormData(formc)
		})
		.then(res => {
			console.log(res);
			// todo enable submit button
        })
});