function PowersofTwo(num) { 

    function binary(){
      let lo = 0, hi = num
  
      while(lo <= hi){
        let mid = Math.floor(lo + (hi - lo)/2)
        if(2 ** mid === num){
          return true
        }
        else if(2 ** mid > num){
          hi = mid - 1
        }
        else{
          lo = mid + 1
        }
      }
  
      return false
    }
  
    // code goes here  
    return binary() + ''; 
  
  }
     
  // keep this function call here 
  console.log(PowersofTwo(8));