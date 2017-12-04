
{function chunk(arr, size) {
	const chunked = [];
	let index = 0;

	while (index < arr.length) {
		chunked.push(arr.slice(index, index + size));
		index += size;
	}

	return chunked;
}

var arr = [ 3, 5, 6, 6, 6, 642, 40000];

var log = console.log;
log(chunk(arr, 3));

}

// function chunk(arr, size) {
// 	const chunked = [];

// 	for (const element of arr) {
// 		const last = chunked[chunked.length - 1];

// 		if (!last || last.length === size) {
// 			chunked.push([ element ]);
// 		} else {
// 			last.push(element);
// 		}
// 	}

// 	return chunked;
// }
