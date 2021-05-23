function runProgram(input) {
    input = input.trim().split('\n')

    let size = +input[0]
    let arr = input[1].trim().split(' ').map(Number)
    arr.sort((a, b) => a-b)

    let obj = {}
    recur(0, [])


    function recur(idx, combo){
        let val = combo.join(' ')
        if(! (val in obj)){
            console.log(val)
            obj[val] = true
        }
        if(idx === size){
            return
        }

        for(let i=idx; i<size; i++){
            recur(i+1, [...combo, arr[i]])
        }
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`7
    5 1 6 1 2 5 5`);
} else {
	process.stdin.resume();
	process.stdin.setEncoding("ascii");
	let read = "";
	process.stdin.on("data", function (input) {
		read += input;
	});
	process.stdin.on("end", function () {
		read = read.replace(/\n$/, "");
		read = read.replace(/\n$/, "");
		runProgram(read);
	});
	process.on("SIGINT", function () {
		read = read.replace(/\n$/, "");
		runProgram(read);
		process.exit(0);
	});
}