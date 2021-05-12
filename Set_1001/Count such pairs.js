function runProgram(input) {
    input = input.trim().split('\n')

    let [size, k] = input[0].trim().split(' ').map(Number)
    let arr = input[1].trim().split(' ').map(Number)

    let nums = {}
    for(let i=0; i<size; i++){
        let val = arr[i]
        if(nums[val] === undefined){
            nums[val] = 1
        }
        else{
            nums[val]++
        }
    }
    
    let count = 0
    for(let i=0; i<arr.length; i++){
        let diff = k - arr[i]
        if(diff === k){
            count += Math.floor(nums[k]/2)
            if(nums[k] % 2 === 0){
                nums[k] = 0
            }
            else{
                nums[k] = 1
            }
        }
        else if(nums[diff] !== undefined && nums[diff] > 0){
            nums[k] = 0
            nums
        }
    }

    console.log(count)
}
if (process.env.USER === "arjun1237") {
	runProgram(`5 9
    3 0 6 2 7`);
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