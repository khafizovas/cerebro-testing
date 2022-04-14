/**
 * Написать функцию отложенного вызова переданной функции (В простонародии debounce).
 * После последнего вызова данной функции спустя определенное время (передается вторым
 * аргументом, по умолчанию 1 секунда) должна выполнится функция, которая была передана
 * первым аргументом.
 * @param {Function} executedFunction Функция для выполнения
 * @param {Number} [delay=1] Время задержки в секундах
 */
const debounce = (executedFunction, delay = 1) => {
	let timer;

	return (...arguments) => {
		clearTimeout(timer);

		timer = setTimeout(
			() => executedFunction.apply(this, arguments),
			delay * 1000
		);
	};
};

module.exports = debounce;
