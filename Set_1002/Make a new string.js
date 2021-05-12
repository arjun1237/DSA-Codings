function runProgram(input) {
    let str = input.trim()
    
    let res = ''
    for(let char of str){
        if(char === 'a' || char === 'b'){
            res += char
        }
        else{
            let code = char.charCodeAt(0) - 97
            let sqr = code * code
            if(sqr > 25){
                sqr = sqr % 26
            }
            res += String.fromCharCode(sqr + 97)
            // console.log(res, char, sqr)
        }
    }
    console.log(res)
}
if (process.env.USER === "arjun1237") {
	runProgram(`abcg`);
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