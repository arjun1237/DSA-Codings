function runProgram(input) {
    input = input.trim().split('\n')

    let tests = +input[0]

    let line = 1
    for(let i=0; i<tests; i++){
        let n = +input[line++]
        let arr = input[line++].trim().split(' ').map(Number)

        let start = 0
        let end = 0
        let max = 0
        let count = 0
        let obj = {}
        for(let j=0; j<arr.length; j++){
            let el = arr[j]
            if(obj[el] === undefined){
                obj[el] = 1
                count++
            }
            else{
                if(count > max) max = count
                while(obj[el]){
                    delete obj[arr[start++]]
                    count--
                }
                obj[el] = 1
                count++
            }
        }
        if(count > max) max = count
        console.log(max)
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`3
    8
    1 1 1 1 1 1 1 1
    5
    1 1
    4
    1 2 2 1`);
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