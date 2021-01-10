// parse command line arguments
const parseArgs = (args) => {
	// set of allowed arguments
	let options = { s: ["s", "safe"], a: ["a", "axis"] };
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

// check whether current coordinate is safe or not
const isSafe = (xAxis, yAxis, safe) =>
	integerSum(xAxis) + integerSum(yAxis) <= safe;

const robotMoves = () => {
	// get command line arguments
	let args = parseArgs(process.argv.slice(2));

	let area = args["a"] || 1000, // square size range, default: 1000
		safe = args["s"] || 23, // unsafe area range, default: 23
		surfaceArea = 0,
		safeArea = 0;

	// Loop through 2Dimentional surface x-axis & y-axis
	for (let xAxis = 0; xAxis <= area; xAxis++) {
		for (let yAxis = 0; yAxis <= area; yAxis++) {
			if (isSafe(xAxis, yAxis, safe)) {
				safeArea++;
			}
			++surfaceArea;
		}
	}

	// As there are 4 quadrants (x+1,y), (x-1, y), (x, y+1), and (x, y-1)
	// so we will multiply the result by 4
	console.log(`> Surface area size: ${addComma(surfaceArea * 4)} points`);
	console.log(
		`> Area size robot can access: ${addComma(safeArea * 4)} points`
	);
};

// initializition
robotMoves();
