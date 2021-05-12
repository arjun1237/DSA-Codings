function runProgram(input) {
    input = input.trim().split('\n')

    let tests = +input[0]

    for(let i=1; i<=tests; i++){
        let num = input[i].trim().split('')
        let neg = num[0] === '-'
        if(neg){
            num = num.slice(1)
        }
        num.sort((a, b) => neg ? b-a : a-b, 0)
        let ind = 0
        while(num[ind] === '0'){
            ind++
        }
        if(ind > 0){
            let zeroes = num.slice(0, ind).join('')
            let first = num[ind]
            let rest = num.slice(ind+1).join('')
            num = first + zeroes + rest
        }
        else{
            num = num.join('')
        }
        if(neg){
            num = '-' + num
        }
        console.log(+num)
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`2
    5333412100
    -1002911`);
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