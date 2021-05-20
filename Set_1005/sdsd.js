function SnakeCase(str) { 

    str = str.toLowerCase()
  
    let words = []
  
    let word = ''
    for(let char of str){
        let val = char.charCodeAt(0)
        console.log(val)
      if(val > 96 && val < 123){
        word += char
      }
      else{
        if(word.length > 0) words.push(word)
        word = ''
      }
    }
  
    // code goes here  
    return words; 
  
  }
     
  // keep this function call here 
  console.log(SnakeCase("cats AND*Dogs-are Awesome"));