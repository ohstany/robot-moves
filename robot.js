// parse command line arguments
const parseArgs = (args) => {
	// set of allowed arguments
	let options = { s: ["s", "safe"] };
	// build arguments tree
	return args.reduce((p, n, ix) => {
		if (n.indexOf("-") >= 0 && args[ix + 1]) {
			let option = n.split("-").filter((i) => i)[0];
			let key = Object.values(options).findIndex(
				(i) => i.indexOf(option) >= 0
			);
			if (key >= 0)
				p[Object.keys(options)[key]] = !isNaN(args[ix + 1])
					? parseInt(args[ix + 1])
					: args[ix + 1];
		}
		return p;
	}, {});
};

// add coma separator to number with more than thousand value
const addComma = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

// finction that splits and sums numbers from given integer
const integerSum = (num) =>
	Array.from(Math.abs(num).toString()).reduce((p, n) => p + parseInt(n), 0);

// Find out a sum of splited digits of a number to satisfy out condition (23)
const findAxisRange = (safe) => {
	let limit = 0,
		sum = 0;

	while (1) {
		sum = integerSum(limit);
		if (sum > safe) break;
		limit += 1;
	}

	return limit;
};

const buildMap = (range, safe) => {
	let surfaceAreaSize = 0,
		safeAreaSize = 0;

	const axisRange = Array.from(Array(range), (_i, i) => i);

	const gridSurface = axisRange.reduce((p1, axisX, index1) => {
		p1[index1] = axisRange.reduce((p2, axisY, index2) => {
			// summary of 2 splited digits of x-axis & y-axis
			const sum = integerSum(axisX) + integerSum(axisY);

			p2[index2] = {
				sum,
				safe: false,
				safe: sum <= safe, // check whether current coordinate is safe or not
				marked: false,
			};

			// remove not accessible area by robot
			if (
				index1 - 1 >= 0 &&
				index2 - 1 >= 0 &&
				p2[index2].safe &&
				p2[index2 - 1].safe === false &&
				p1[index1 - 1][index2 - 1].safe == false &&
				p1[index1 - 1][index2].safe == false
			) {
				p2[index2].safe = false;
				p2[index2].marked = true;
			}

			if (p2[index2].safe) {
				// calc safe area
				safeAreaSize += 1;
			}
			// calc total area
			surfaceAreaSize += 1;

			return p2;
		}, []);

		return p1;
	}, []);

	return {
		gridSurface,
		safeAreaSize,
		surfaceAreaSize,
	};
};

const robotMoves = () => {
	// get command line arguments
	let args = parseArgs(process.argv.slice(2));

	let safe = args["s"] || 23; // unsafe area range, default: 23

	let axisRange = findAxisRange(safe); // square size range, default: 1000
	// Loop through 2Dimentional surface x-axis & y-axis
	let { gridSurface, safeAreaSize, surfaceAreaSize } = buildMap(
		axisRange,
		safe
	);

	// As there are 4 quadrants we will multiply the result by 4
	console.log(`> Surface area size: ${addComma(surfaceAreaSize * 4)} points`);
	console.log(
		`> Area size robot can access: ${addComma(
			(safeAreaSize - axisRange) * 4 + 1
		)} points`
	);
};

// initializition
robotMoves();
