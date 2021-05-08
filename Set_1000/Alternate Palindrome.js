function runProgram(input) {
    input = input.trim().split('\n')

    let tests = +input[0]

    let line = 1
    for(let i=0; i<tests; i++){
        let len = +input[line++]
        let str = input[line++].trim()

        let store = new Set()
        for(let char of str){
            if(store.has(char)){
                store.delete(char)
            }
            else{
                store.add(char)
            }
        }
        console.log(store.size > 1 ? "No" : "Yes")
    }

}
if (process.env.USER === "arjun1237") {
	runProgram(`3
    1
    a
    3
    khgioutkhgioutklklmmkj
    4
    abbb`);
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