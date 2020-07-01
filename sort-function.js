// Весь код вставлять в консоли DevTools
function sorting(array, typeSort) {
	if (typeSort == 'ASC') {
		array.sort(function(a,b) {
			return a - b;
		});
	} else if (typeSort == 'DESC') {
		array.sort(function(a,b) {
			return b - a;
		});
	} else {
		console.log('Неверный тип сортировки, доступны ASC или DESC');
		return false;
	}

	console.log(array);
}

// Пример сортировки по возрастанию
window.sorting([5,1,7,9,3,6,11], 'ASC');

// Пример сортировки по убыванию
window.sorting([5,1,7,9,3,6,11], 'DESC');

// Пример неверных вхождений
window.sorting([5,1,7,9,3,6,11], 'ABSs');