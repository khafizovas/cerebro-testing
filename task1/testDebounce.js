const debounce = require('./debounce');

const testDebounce = () => {
	const debouncedFunction = debounce(
		(i) => console.log(`Function call, ${i}`),
		2
	);

	debouncedFunction(0);
	debouncedFunction(1);
	debouncedFunction(2); // вызовет console.log

	setTimeout(() => debouncedFunction(3), 2000);
	setTimeout(() => debouncedFunction(4), 3000); // вызовет console.log
};

testDebounce();
