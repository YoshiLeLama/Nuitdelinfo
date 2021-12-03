var Konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;

var keyHandler = function (event) {

	if (Konami.indexOf(event.key) < 0 || event.key !== Konami[current]) {
		current = 0;
		return;
	}
	current++;
    	if (Konami.length === current) {
		current = 0;
		window.alert('Konami ! ');
	}

};
document.addEventListener('keydown', keyHandler, false);