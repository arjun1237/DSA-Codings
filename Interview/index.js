let list = {
    1: [2, 3],
    2: [4, 5, 7],
    3: [4, 2, 1],
    4: [3, 5, 6],
    5: [],
    6: [],
    7: []
}


let start = 1
let end = 6




function bfs(list){
    let queue = [start] // [2, 3]

    let visited = {} // 1, 
    visited[start] = 0
    while(queue.length){
        let val = queue.shift() // 2
        let curr = list[val] // [4, 5, 7]
        console.log(curr, val)

        for(let i=0; i<curr.length; i++){
            if(visited[curr[i]] === undefined){
                visited[curr[i]] = visited[val] + 1
                queue.push(curr[i])
            }
        }
    }

    return visited[end]
}   


console.log(bfs(list))