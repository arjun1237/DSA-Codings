function runProgram(input) {
    let str = input.trim()

    let res = []
    let opens = {
        '(' : ')',
        "{" : "}",
        "[" : ']'
    }
    let closes = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    

    for(let char of str){
        if(char in opens || char in closes){
            if(char in closes && res.length === 0){
                console.log("unbalanced")
                return
            }
            else if(char in closes){
                if(closes[char] === res[res.length-1]) res.pop()
                else{
                    console.log("unbalanced")
                    return
                }
            }
            else{
                res.push(char)
            }
        }
    }

    console.log(res.length === 0 ? "balanced" : "unbalanced")
}
if (process.env.USER === "arjun1237") {
	runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]`);
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