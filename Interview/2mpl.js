console.log("a")
console.log("b")
setTimeout(() => console.log("sdsd"), 0)

abc().then(res => console.log(res))


function abc(){
    return Promise.resolve("done")
}