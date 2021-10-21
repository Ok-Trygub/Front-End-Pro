const yearOfBirth = prompt('Укажите год своего рождения', '1997');
const currentYear = 2021;
const userAge = currentYear - yearOfBirth;
let cityOfResidence;
let favoriteSport;

if (yearOfBirth > 1900 && yearOfBirth < 2020) {
	cityOfResidence = prompt('В каком гороже Вы проживаете?', 'Одесса');
} else if (yearOfBirth > 0 && yearOfBirth < 1900) {
	alert('Год рождения должен быть не менее, чем 1900 год. Попробуйте снова.');
} else if (yearOfBirth >= 2020) {
	alert('Вы слишком малы или не родились, чтобы это писать...');
} else if (isNaN(+yearOfBirth)) {
	alert('Год рождения должен состоять только из цифр...');
} else if (yearOfBirth === null || yearOfBirth.trim() === '') {
	alert('Жаль, что Вы не захотели ввести свой год рождения...');
}

if (cityOfResidence === null || cityOfResidence.trim() === '') {
	alert('Жаль, что Вы не захотели ввести город вашего проживания...');
} else {
	favoriteSport = prompt('Какой Ваш любимый вид спорта?', 'футбол');
}

let userCity;

switch (cityOfResidence) {
	case 'Киев':
	case 'Москва':
	case 'Минск':
		userCity = '\n Ты живешь в столице ' + cityOfResidence + '.';
		break;
	default:
		userCity = '\n ты живешь в городе ' + cityOfResidence + '.';
}

let userSport;

if (favoriteSport === null || favoriteSport.trim() === '') {
	alert('Жаль, что Вы не захотели ввести Ваш любимый вид спорта...');
} else if (favoriteSport === 'футбол') {
	userSport = '\n Круто! Хочешь стать Андреем Шевченко!';
	alert('Тебе ' + userAge + ' лет.' + userCity + userSport);
} else if (favoriteSport === 'бокс') {
	userSport = '\n Круто! Хочешь стать Виталием Кличко!';
	alert('Тебе ' + userAge + ' лет.' + userCity + userSport);
} else if (favoriteSport === 'автогонки') {
	userSport = '\n Круто! Хочешь стать Михаэлем Шумахером!';
	alert('Тебе ' + userAge + ' лет.' + userCity + userSport);
} else {
	userSport = favoriteSport;
	alert('Тебе ' + userAge + ' лет.' + userCity + userSport);
}


