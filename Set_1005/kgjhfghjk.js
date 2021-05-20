function MinWindowSubstring(strArr) { 

    let [word, target] = strArr
  
    target = target

    let tObj = {}

    for(let char of target){
        if(char in tObj){
            tObj[char]++
        }else{
            tObj[char] = 1
        }
    }
  
    let finale = ''
  
    recur(0, 0, '', tObj)
  
    function recur(idx1, idx2, res, obj){
        if(idx1 === word.length-1) return
        if(idx2 === target.length){
            if(finale.length > res.length || finale.length === 0){
                finale = res
            }
            return
        }
        
        if(word[idx1] in obj){
            let newObj = {...obj}
            if(newObj[word[idx1]] === 1){
                delete newObj[word[idx1]]
            }
            else{
                newObj[word[idx1]]--
            }
            recur(idx1 + 1, idx2 + 1, res + word[idx1], newObj)
        }
        if(res.length === 0){
            recur(idx1 + 1, idx2, res, {...obj})
        }
        recur(idx1 + 1, idx2, res + word[idx1 + 1], {...obj})
    }
  
    // code goes here  
    return finale; 
  
  }

  console.log( MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"]))