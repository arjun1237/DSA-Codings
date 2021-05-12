function runProgram(input) {
    let num = +input
    
    let p = 0
    while(num > 0){
        p++
        num = Math.floor(num/2)
    }

    console.log(p)
}

if (process.env.USER === "arjun1237") {
	runProgram(`10`);
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



promises = []

for(let i=0; i<num; i++){
    promises.push(await Model.findByIDAnd())
}

Promise.allSettled(promises).then(res => res.forEach(r) => {
    if(r.status === "rejected"){

    }
})