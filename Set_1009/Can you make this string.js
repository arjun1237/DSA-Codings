function runProgram(input) {
    input = input.trim().split('\n')

    let tests = +input[0]

    let line = 1
    for(let i=0; i<tests; i++){
        let str1 = input[line++].trim()
        let str2 = input[line++].trim()
        if(str1 === str2){
            console.log("Yes")
        }
        else{
            if(str2.length % str1.length !== 0){
                console.log("No")
            }
            else{
                let nums = str2.length / str1.length
                let obj1 = {}, obj2 = {}
                for(let char of str1){
                    if(char in obj1) obj1[char]++
                    else obj1[char] = 1
                }
                for(let char of str2){
                    if(char in obj2) obj2[char]++
                    else obj2[char] = 1
                }

                for(let key in obj1){
                    if(obj2[key] === nums * obj1[key]) delete obj1[key]
                }


                console.log(Object.keys(obj1).length === 0 ? "Yes" : "No")
            }
        }
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`3
    ab
    aabb
    abcdef
    abcdef
    abcxyz
    abcxyababcxyzcxyzzabcxyz`);
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