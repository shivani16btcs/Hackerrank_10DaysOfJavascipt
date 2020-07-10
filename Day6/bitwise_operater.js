function getMaxLessThanK(n,k){
  
    let ans=0;
    
    
     for(let a=2;a<n;a++){
         for(let b=a+1;b<=n;b++){
             if((a&b)<k && (a&b)>ans){
                 ans=a&b
             }
         }
     }
    return ans
    
    }