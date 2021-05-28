console.log("a")
console.log("b")
setTimeout(() => console.log("sdsd"), 0)

abc().then(res => console.log(res))


function abc(){
    return Promise.resolve("done")
}







// const func = () => {

// }




// onclick={(e) => func(e, a,)}

// const [state, setState] = useState(0)

// const func = () => {
//     setState(prev => prev + 1)
//     setState(state + 1)
//     setState(state + 1)
//     setState(state + 1)
// }